import {useRecoilState, useRecoilValue} from "recoil";
import {bopColorsSelector, bopFiltersState} from "../../Atoms/bop";
import {useState} from "react";
import './Filters.css';
import {v4 as uuid} from 'uuid';
import {useEffect} from "react";

export default function Filters() {
    const bopColors = useRecoilValue(bopColorsSelector)
    const [bopFilters, setBopFilters] = useRecoilState(bopFiltersState)
    const [active, setActive] = useState(false);

    useEffect(() => {
        window.addEventListener('keypress', handleKeyPress)
    }, [])

    useEffect(() => {
        setBopFilters((s) => ({...s, colors: bopColors}))
    }, [bopColors])

    const handleKeyPress = (e) => {
        if (e.ctrlKey && e.key === 'Enter') {
            setActive(s => !s)
        }
    };

    const onChange = (e) => {
        const { value } = e.target;
        setBopFilters(s => ({...s, search: value}));
    };

    return <div className={`filters-container ${active ? 'active' : ''} flex items-center flex-col justify-center`}>
        <div>
            <div className="flex justify-between items-center">
                <label className="text-white p-4" htmlFor="">Search by name</label>
                <input type="text" onChange={onChange} value={bopFilters.search} className="h-8 rounded p-4" placeholder="search"/>
            </div>
            <div className="flex justify-between items-center">
                <label className="text-white p-4" htmlFor="">Colors</label>
                {
                    bopFilters.colors.map((color) => <div key={uuid()} className="rounded-2xl w-6 h-6 my-2" style={{background: color}} />)
                }
            </div>
        </div>
    </div>
}
