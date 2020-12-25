import {useRecoilState} from "recoil";
import {bopFiltersState} from "../../Atoms/bop";

export default function Filters() {
    const [bopFilters, setBopFilters] = useRecoilState(bopFiltersState)

    const onChange = (e) => {
        const { value } = e.target;
        setBopFilters(value);
    }

    return <div>
        {console.log(bopFilters)}
        <input type="text" onChange={onChange} value={bopFilters}/>
    </div>
}
