import { useRecoilValue } from "recoil";
import React from "react";
import Landscape from "../Components/Landscape/Landscape";
import {filteredBopSelector} from "../Atoms/bop";
import Filters from "../Components/Filters/Fiters";
import EditorButton from "../Components/EditorButton/EditorButton";
import BopEditor from "../Components/Editor/BopEditor";
import Bop from "../Components/Bop/Bop";

export default function World() {
    const filteredBops = useRecoilValue(filteredBopSelector);

    return <div id="world" className="flex-1 relative overflow-hidden flex h-screen">
        <Landscape />
        <Filters />
        {
            Object.keys(filteredBops).map(key => <Bop name={filteredBops[key].name} id={key} color={filteredBops[key].color} x={filteredBops[key].positions[0]}  y={filteredBops[key].positions[1]} key={key} />)
        }
        <EditorButton />
        <BopEditor />
    </div>
}
