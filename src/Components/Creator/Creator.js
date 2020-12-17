import {useSetRecoilState} from "recoil";
import { uuid } from 'uuidv4';
import {dotsState} from "../../Atoms/dot";
import {getRandomColor, getRandomPosition} from "../../helpers/helpers";

export default function Creator() {
    const setDots = useSetRecoilState(dotsState)

    const addDot = () => {
        const dotId = uuid();
        const newDot = {
            name: 'bop',
            color: getRandomColor(),
            position: getRandomPosition()
        };

        setDots((s) => ({...s, [dotId]: newDot}))
    }

    return (
        <>
            <button onClick={addDot}>Add Dot</button>
        </>
    )
}