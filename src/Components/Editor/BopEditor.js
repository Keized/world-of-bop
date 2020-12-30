import { useRecoilState, useSetRecoilState } from "recoil";
import { getRandomColor, getRandomPosition } from "../../helpers/helpers";
import { bopEditorPaneState } from "../../Atoms/editor";
import { useEffect, useState } from "react";
import Bop from "../Bop/Bop";
import { CirclePicker } from "react-color";
import './BopEditor.css'
import { bopDetails, bopList, selectedBopId } from '../../Recoil/atoms';
import { v4 } from 'uuid';

export default function BopEditor() {
    const defaultBop = {
        id: v4(),
        name: 'Bop',
        color: getRandomColor(),
        positions: getRandomPosition()
    }

    const setList = useSetRecoilState(bopList);
    const [selected, setSelected] = useRecoilState(selectedBopId);
    const [details, setDetails] = useRecoilState(bopDetails(selected));
    const [bopEditorPane, setBopEditorPane] = useRecoilState(bopEditorPaneState);
    const [editedBop, setEditedBop] = useState(defaultBop);

    useEffect(() => {
        if (Object.keys(details).length) {
            setEditedBop(details)
        } else {
            setEditedBop(defaultBop)
        }
    }, [details])

    const reset = () => {
        setEditedBop(defaultBop);
    }

    const save = () => {
        setDetails(editedBop);
        if (!selected) {
            setList((s) => [...s, editedBop])
        } else {
            setList((s) => s.map((bop) => {
                const copy = {...bop}
                if (bop.id === selected) {
                    copy.name = editedBop.name;
                }
                return copy;
            }))
        }
        onClose();
    }

    const onChange = (e) => {
        setEditedBop((s) => ({
            ...s,
            [e.target.name]: e.target.value
        }))
    }

    const onClose = () => {
        reset();
        setBopEditorPane({active: false});
        setSelected(null);
    }

    return (
        <div className={`${bopEditorPane.active ? 'active' : ''} bop-editor-pane`}>
            <div className='p-4 flex h-full flex-col justify-between'>
                <div className="flex-1 flex flex-col items-center justify-center">
                    <Bop edited color={editedBop.color} />
                </div>
                <div className=" flex flex-col p-4 mb-8 text-center">
                    <input type="text" name="name" onChange={onChange} value={editedBop.name} autoComplete={"off"} className="bg-transparent focus:outline-none mb-4 w-full text-center text-xl" placeholder="Name"/>

                    <CirclePicker
                        color={ editedBop.color }
                        onChangeComplete={ (color) => {
                            setEditedBop((s) => ({...s, color: color.hex}))
                        }}
                    />
                </div>
                <div className="flex">
                    <button className="block w-full text-center p-2 bg-gray-100 rounded mx-4" onClick={onClose}>Close</button>
                    <button className="block w-full text-center p-2 bg-blue-500 text-white rounded mx-4" onClick={save}>Save</button>
                </div>
            </div>
        </div>
    )
}
