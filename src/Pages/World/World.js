import "./World.css";
import '../../Components/Dot/Dot.css';
import {useRecoilState, useRecoilValue} from "recoil";
import {useEffect, useState} from "react";
import {dots} from "../../Atoms/dot";


export default function World() {
    const [state, setState] = useRecoilState(dots);

    useEffect(() => {
        setState([
            {
                id: 1,
                name: 'bop',
                color: '#000000',
                position: [0, 0]
            },
            {
                id: 2,
                name: 'bap',
                color: '#00FF00',
                position: [0, 0]
            }
        ])
    }, [])

    return <div id="world">
        <Dot id={1} />
        <Dot id={2} />
    </div>
}


function Dot({id = 1}) {
    // const dotState = useRecoilValue(dotStateFamily(id))

    return <div className="dot">
    </div>
}

