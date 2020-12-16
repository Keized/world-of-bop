import Rectangle from "./Rectangle";
import {v4 as uuidv4} from "uuid";
import {useEffect, useRef, useState} from "react";
import useHouse from "./useHouse";

function Plan() {
    const {rooms, selectedId, setRoom, setSelectedId} = useHouse();
    const svgRef = useRef();
    const [clickOffset, setClickOffset] = useState({x: 0, y: 0});
    const [svgOffset, setSvgOffset] = useState({x: 0, y: 0});

    useEffect(() => {
        const {x, y} = svgRef.current.getBoundingClientRect();
        setSvgOffset({x, y})
    }, [])


    /**
     * @param {Event} event
     * @param {int} roomId
     */
    function onMouseDown(event, roomId = null) {
        event.preventDefault();
        event.stopPropagation();
        if (roomId === null) {
            setSelectedId(null);
            return;
        }

        const {x, y} = event.target.getBoundingClientRect()
        const {clientX, clientY} = event;
        setClickOffset({x: clientX - x, y: clientY - y});
        setSelectedId(roomId);
        setRoom(roomId, {...rooms[roomId], moving: true});
    }

    function onMouseUp() {
        if (selectedId) {
            setRoom(selectedId, {...rooms[selectedId], moving: false});
        }
    }

    function onMouseMove(event) {
        if (selectedId && rooms[selectedId].moving) {
            const x = event.clientX - svgOffset.x - clickOffset.x;
            const y = event.clientY - svgOffset.y - clickOffset.y;

            setRoom(selectedId, {...rooms[selectedId], x, y});
        }
    }

    function allowDrop(ev) {
        ev.preventDefault();
    }

    function onDrop(event)
    {
        const x = event.clientX - svgOffset.x - clickOffset.x;
        const y = event.clientY - svgOffset.y - clickOffset.y;

        const id = uuidv4()
        const room = {
            name: '',
            color: 'black',
            width: 100,
            height: 100,
            x,
            y
        }

        setRoom(id, room);
    }

    return (
        <div id="plan" onDrop={onDrop} onDragOver={allowDrop}>
            <svg id="svg2" ref={svgRef} onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseDown={(event) => onMouseDown(event)}>
                {
                    Object.keys(rooms).map((key) => (
                        <Rectangle room={rooms[key]} onMouseDown={(event) => onMouseDown(event, key)} />
                    ))
                }
            </svg>
        </div>
    )
}

export default Plan;
