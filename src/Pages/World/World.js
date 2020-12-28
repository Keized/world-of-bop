import "./World.css";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import React, {useEffect} from "react";
import Filters from "../../Components/Filters/Fiters";
import { bopListQuery, bopsState, filteredBopSelector } from "../../Atoms/bop";
import Bop from "../../Components/Bop/Bop";
import AddBopButton from "../../Components/AddBopButton/AddBopButton";
import BopEditor from "../../Components/Editor/BopEditor";
import Landscape from '../../Components/Landscape/Landscape';


export default function World() {
    const filteredBops = useRecoilValue(filteredBopSelector);
    const query = useRecoilValue(bopListQuery);
    const setBops = useSetRecoilState(bopsState);

    useEffect(() => {
        setBops(query)
    }, [])

    return <div id="world" className="flex-1 relative overflow-hidden flex h-screen">
        <Landscape />
        <Filters />
        {
            Object.keys(filteredBops).map(key => <Bop name={filteredBops[key].name}  color={filteredBops[key].color} x={filteredBops[key].position[0]}  y={filteredBops[key].position[1]} key={key} />)
        }
        <AddBopButton />
        <BopEditor />
    </div>
}
