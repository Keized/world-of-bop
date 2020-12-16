import {useRef} from "react";

function Rectangle({ onMouseDown, room }) {
    const textRef = useRef();

    return (
        <>
            <rect
                id="cloneableObject"
                height={room.height}
                width={room.width}
                x={room.x}
                y={room.y}
                stroke={room.color}
                fill="transparent"
                strokeWidth="2"
                onMouseDown={onMouseDown}
                className={`${room.moving ? 'grabbing' : ''} grabbable`}
            />
            <text
                ref={textRef}
                x={room.x + room.width / 2 }
                y={room.y + room.height / 2}
                fill="red"
            >
                I love SVG!
            </text>
            {console.log(textRef)}
        </>
    )
}

export default Rectangle;
