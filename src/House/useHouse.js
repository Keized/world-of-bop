import {HouseContext} from "./HouseProvider";
import {useContext, useEffect} from "react";

function useHouse() {
    const {house, setHouse} = useContext(HouseContext)

    useEffect(() => {
        console.log(house)
    }, [house])

    function setRoom(id, room) {
        setHouse(h => ({...h, rooms: {...h.rooms, [id]: room}}))
    }

    function setSelectedId(selectedId) {
        setHouse(h => ({...h, selectedId}))
    }

    return {
        rooms: house.rooms,
        selectedId: house.selectedId,
        setRoom,
        setSelectedId
    }
}

export default useHouse;
