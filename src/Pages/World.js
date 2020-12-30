import { useRecoilValue } from "recoil";
import Landscape from "../Components/Landscape/Landscape";
import Filters from "../Components/Filters/Fiters";
import EditorButton from "../Components/EditorButton/EditorButton";
import BopEditor from "../Components/Editor/BopEditor";
import { filteredBopList } from '../Recoil/selectors';
import BopItem from '../Components/BopItem/BopItem';

export default function World() {
    const filteredBops = useRecoilValue(filteredBopList);

    return <div id="world" className="flex-1 relative overflow-hidden flex h-screen">
        <Landscape />
        <Filters />
        {
            filteredBops.map((bop) => <BopItem key={bop.id} id={bop.id} />)
        }
        <EditorButton />
        <BopEditor />
    </div>
}
