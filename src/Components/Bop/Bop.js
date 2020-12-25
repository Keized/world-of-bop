import './Bop.css';
import {useRef} from "react";
import {useRecoilState, useSetRecoilState} from "recoil";
import {bopSelectorFamily} from "../../Atoms/bop";

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


export default function Bop({id = 1}) {
    const [dot, setDot] = useRecoilState(bopSelectorFamily(id))

    function changeColor() {
        const color = getRandomColor()
        setDot({...dot, color});
    }

    return  <>
        <div className="bop-wrapper" style={{ left: `${dot.position[0]}%`, top: `${dot.position[1]}%` }}>
            <div className="bop" onClick={changeColor} style={{ background: dot.color }}>
                    <div className="bop-eye" />
                    <div className="bop-eye" />
                    <div className="bop-mouth" />
            </div>
        </div>
    </>
}
