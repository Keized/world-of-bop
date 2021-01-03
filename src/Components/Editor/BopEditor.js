import { useRecoilCallback, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { getRandomColor, getRandomPosition } from "../../helpers/helpers";
import { bopEditorPaneState } from "../../Recoil/atoms";
import { useEffect, useState } from "react";
import Bop from "../Bop/Bop";
import { CirclePicker } from "react-color";
import './BopEditor.css'
import { bopDetails, bopList, selectedBopId } from '../../Recoil/atoms';
import { v4 } from 'uuid';
import { postBopQuery } from '../../Recoil/selectors';

export default function BopEditor() {
    const defaultBop = {
        id: v4(),
        name: 'Bop',
        color: getRandomColor(),
        positions: getRandomPosition()
    }

    const [selected, setSelected] = useRecoilState(selectedBopId);
    const [details, setDetails] = useRecoilState(bopDetails(selected));
    const [bopEditorPane, setBopEditorPane] = useRecoilState(bopEditorPaneState);
    const [editedBop, setEditedBop] = useState(defaultBop);

    useEffect(() => {
        if (details && Object.keys(details).length) {
            setEditedBop(details)
        } else {
            setEditedBop(defaultBop)
        }
    }, [details])

    const reset = () => {
        setEditedBop(defaultBop);
    }

    const save = useRecoilCallback(({ set, snapshot }) => async (params) => {
        let body;
        let detailsData;
        const listUrl = 'http://localhost:3001/list';
        const detailsUrl = 'http://localhost:3001/details';
        const headers = { 'Content-Type': 'application/json' };

        if (selected) {
            body = JSON.stringify(editedBop);
            const detailsResponse = await fetch(`${detailsUrl}/${selected}`, {headers, method: 'PUT', body});
            detailsData = await detailsResponse.json();
        } else {
            body = JSON.stringify(editedBop);
            const detailsResponse = await fetch(detailsUrl, {headers, method: 'POST', body});
            detailsData = await detailsResponse.json();

            body = JSON.stringify({ id: editedBop.id, name: editedBop.name });
            const listResponse = await fetch(listUrl, {headers, method: 'POST', body});
            const listData = await listResponse.json();

            const currentList = await snapshot.getPromise(bopList);
            set(bopList, [...currentList, listData]);
        }

        set(bopDetails(details.id), detailsData);

        onClose();
    })

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
