import { useRecoilState } from "recoil";
import { bopFilterState } from "../../Atoms/bop";
import './Filters.css';

export default function Filters() {
    const [bopFilters, setBopFilters] = useRecoilState(bopFilterState)

    const onChange = (e) => {
        setBopFilters(e.target.value);
    };

    return <div className={`p-4`}>
        <div>
            <input type="text" onChange={onChange} value={bopFilters} className="h-8 rounded p-4" placeholder="search"/>
        </div>
    </div>
}
