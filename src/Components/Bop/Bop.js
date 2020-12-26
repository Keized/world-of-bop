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

export default function Bop({x, y, color, name, edited = false}) {
    return  <>
        <div className={`bop-wrapper ${edited ? 'edited': ''}`} style={{ left: `${x}%`, top: `${y}%` }}>
            <div className="bop" style={{ background: color }}>
                    <div className="bop-eye" />
                    <div className="bop-eye" />
                    <div className="bop-mouth" />
            </div>
        </div>
    </>
}
