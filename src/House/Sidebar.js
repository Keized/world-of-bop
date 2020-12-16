import Rectangle from "./Rectangle";

function Sidebar() {
    function onDragStart() {}

    return (
        <div id="sidebar">
            <ul>
                <li>
                    <div draggable style={{height: 80, width: 80}} onDragStart={onDragStart}>
                        <svg>
                            <Rectangle room={{id:null, width: 100, height: 100, x: 0, y: 0, color: 'black'}}/>
                        </svg>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
