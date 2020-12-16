import useHouse from "./useHouse";

function PropertiesSidebar() {
    const { selectedId, rooms, setRoom } = useHouse()

    function onChange (e) {
        const {id, value} = e.target;
        const room = {...rooms[selectedId], [id]: value}
        setRoom(selectedId, room);
    }

    return (
        selectedId ?
            <div id="propertiesSidebar">
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" value={rooms[selectedId].name} onChange={onChange} id="name" />
                </div>

                <div>
                    <label htmlFor="color">Color</label>
                    <input type="text" value={rooms[selectedId].color} onChange={onChange} id="color" />
                </div>
            </div> : <></>

    )
}

export default PropertiesSidebar
