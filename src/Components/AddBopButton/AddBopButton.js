import {addBopSelector} from "../../Atoms/bop";
import {v4 as uuidV4} from "uuid";
import {getRandomColor, getRandomPosition} from "../../helpers/helpers";
import {useSetRecoilState} from "recoil";

export default function AddBopButton() {
    const addBop = useSetRecoilState(addBopSelector);

    const onClick = () => {
        const bop = {
            id: uuidV4(),
            name: uuidV4(),
            position: getRandomPosition(),
            color: getRandomColor()
        }

        addBop(bop);
    }

    return <div>
        <button className="rounded-2xl absolute w-8 h-8 bg-yellow-800 text-white" onClick={onClick}>Add</button>
    </div>
}
