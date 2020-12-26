import "./World.css";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import React from "react";
import Filters from "../../Components/Filters/Fiters";
import {bopsState, filteredBopSelector} from "../../Atoms/bop";
import Bop from "../../Components/Bop/Bop";
import AddBopButton from "../../Components/AddBopButton/AddBopButton";
import BopEditor from "../../Components/BopEditor/BopEditor";


export default function World() {
    const bops = useRecoilValue(filteredBopSelector);

    return <div id="world" className="flex-1 relative overflow-hidden flex h-screen">
        <Filters />
        {
            Object.keys(bops).map(key => <Bop name={bops[key].name}  color={bops[key].color} x={bops[key].position[0]}  y={bops[key].position[1]} key={key} />)
        }
        <AddBopButton />
        <BopEditor />
    </div>
}
