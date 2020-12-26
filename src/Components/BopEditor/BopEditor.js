import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import { v4 as uuid } from 'uuid';
import {getRandomColor, getRandomPosition} from "../../helpers/helpers";
import {bopSelectorFamily, bopsState} from "../../Atoms/bop";
import './BopEditor.css'
import {bopEditorPaneState} from "../../Atoms/editor";
import {useEffect, useState} from "react";
import Bop from "../Bop/Bop";

export default function BopEditor({bopId}) {
    // const setBops = useSetRecoilState(bopsState);
    const [bop, setBop] = useRecoilState(bopSelectorFamily(bopId))
    const [bopEditorPane, setBopEditorPane] = useRecoilState(bopEditorPaneState);
    const [editedBop, setEditedBop] = useState({});

    useEffect(() => {
        console.log(bop);
    }, [])

    useEffect(() => {
        if (bop) {

        } else {
            const bopId = uuid();
            const newBop = {
                id: uuid(),
                name: 'bop',
                color: getRandomColor(),
                position: getRandomPosition()
            };
            setEditedBop(newBop);
        }
    }, [bopId])

    // const addDot = () => {
    //     const bopId = uuid();
    //     const newBop = {
    //         name: 'bop',
    //         color: getRandomColor(),
    //         position: getRandomPosition()
    //     };
    //
    //     setBops((s) => ({...s, [bopId]: newBop}))
    // }

    const onClose = () => {
        setBopEditorPane({active: false});
    }

    return (
        <div className={`${bopEditorPane.active ? 'active' : ''} bop-editor-pane`}>
            <div className='p-4 flex h-full flex-col justify-between'>
                <div className="flex-1 flex flex-col items-center justify-center">
                        <Bop edited />
                </div>
                <div className=" flex flex-col p-4 mb-8">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" value={editedBop.name}/>
                    </div>
                    <div>
                        <label htmlFor="name">Color</label>
                        <input type="text" id="name" value={editedBop.color}/>
                    </div>
                </div>
                <div>
                    <button className="block w-full text-center mb-2 p-2 bg-blue-500 text-white" onClick={() => {}}>Save</button>
                    <button className="block w-full text-center p-2 bg-gray-400 text-white" onClick={onClose}>Close</button>
                </div>

            </div>
        </div>
    )
}
