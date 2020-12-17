import './Dot.css';
import {useRef} from "react";
import {useRecoilState, useSetRecoilState} from "recoil";
import {dotSelectorFamily, dotStateFamily} from "../../Atoms/dot";

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


export default function Dot({id = 1}) {
    const [dot, setDot] = useRecoilState(dotSelectorFamily(id))

    function changeColor() {
        const color = getRandomColor()
        setDot({...dot, color});
    }

    return  <>
        <div className="dot-wrapper" style={{ left: `${dot.position[0]}%`, top: `${dot.position[1]}%` }}>
            <div className="dot" onClick={changeColor} style={{ background: dot.color }}>
                {/*{id}*/}
            </div>
        </div>
    </>
}
