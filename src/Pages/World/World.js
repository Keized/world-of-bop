import "./World.css";
import '../../Components/Dot/Dot.css';
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import React, {useEffect, useRef} from "react";
import {dotSelectorFamily, dotsSourceState, dotsState, dotStateFamily} from "../../Atoms/dot";
import Filters from "../../Components/Filters/Fiters";
import Population from "../../Components/Population/Population";
import Dot from "../../Components/Dot/Dot";


export default function World() {
    const dots = useRecoilValue(dotsState);

    return <div id="world" className="flex-1 relative overflow-hidden">
        <Filters />
        {
            Object.keys(dots).map(key => <Dot id={key} key={key} />)
        }
        <Population />
    </div>
}