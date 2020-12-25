import {useSetRecoilState} from "recoil";
import { uuid } from 'uuidv4';
import {getRandomColor, getRandomPosition} from "../../helpers/helpers";
import {bopsState} from "../../Atoms/bop";

export default function BopEditor() {
    const setBops = useSetRecoilState(bopsState)

    const addDot = () => {
        const bopId = uuid();
        const newBop = {
            name: 'bop',
            color: getRandomColor(),
            position: getRandomPosition()
        };

        setBops((s) => ({...s, [bopId]: newBop}))
    }

    return (
        <>
            <button onClick={addDot}>Add Dot</button>
        </>
    )
}
