import { useRecoilState } from "recoil";
import './Filters.css';
import { bopFilter } from '../../Recoil/atoms';

export default function Filters() {
    const [filter, setFilter] = useRecoilState(bopFilter)

    const onChange = (e) => {
        setFilter(e.target.value);
    };

    return <div className={`p-4`}>
        <div>
            <input type="text" onChange={onChange} value={filter} className="h-8 rounded p-4" placeholder="search"/>
        </div>
    </div>
}
