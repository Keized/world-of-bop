import "./World.css";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import React from "react";
import Filters from "../../Components/Filters/Fiters";
import Population from "../../Components/Population/Population";
import {bopsState, filteredBopSelector} from "../../Atoms/bop";
import Bop from "../../Components/Bop/Bop";
import AddBopButton from "../../Components/AddBopButton/AddBopButton";


export default function World() {
    const bops = useRecoilValue(filteredBopSelector);

    return <div id="world" className="flex-1 relative overflow-hidden flex h-screen">
        <Filters />
        {
            Object.keys(bops).map(key => <Bop id={key} key={key} />)
        }
        <AddBopButton />
    </div>
}
