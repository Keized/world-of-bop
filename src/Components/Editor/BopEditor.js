import { useRecoilState } from "recoil";
import { getRandomColor, getRandomPosition } from "../../helpers/helpers";
import { bopSelectorFamily, selectedBopIdState } from "../../Atoms/bop";
import { bopEditorPaneState } from "../../Atoms/editor";
import { useEffect, useState } from "react";
import Bop from "../Bop/Bop";
import { CirclePicker } from "react-color";
import './BopEditor.css'

const defaultBop = {
    name: 'Bop',
    color: getRandomColor(),
    positions: getRandomPosition()
}

export default function BopEditor() {
    const [selected, setSelected] = useRecoilState(selectedBopIdState)
    const [bop, setBop] = useRecoilState(bopSelectorFamily(selected))
    const [bopEditorPane, setBopEditorPane] = useRecoilState(bopEditorPaneState);
    const [editedBop, editBop] = useState(defaultBop);

    useEffect(() => {
        editBop(bop || defaultBop)
    }, [bop])

    const reset = () => {
        editBop(defaultBop);
    }

    const save = () => {
        setBop(editedBop);
        onClose();
    }

    const onChange = (e) => {
        editBop((s) => ({
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
        <div className={`${bopEditorPane.active ? 'active' : ''} bop-editor-pane bg-blue-200`}>
            <div className='p-4 flex h-full flex-col justify-between'>
                <div className="flex-1 flex flex-col items-center justify-center">
                    <Bop edited color={editedBop.color} name={editedBop.name} />
                </div>
                <div className=" flex flex-col p-4 mb-8 text-center">
                    <input type="text" name="name" onChange={onChange} value={editedBop.name} autoComplete={"off"} className="bg-transparent focus:outline-none mb-4 w-full text-center text-xl" placeholder="Name"/>

                    <CirclePicker
                        color={ editedBop.color }
                        onChangeComplete={ (color) => {
                            editBop((s) => ({...s, color: color.hex}))
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
