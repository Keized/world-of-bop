import './Bop.css';
import {useRecoilState, useSetRecoilState} from "recoil";
import {selectedBopIdState} from "../../Atoms/bop";
import {bopEditorPaneState} from "../../Atoms/editor";

export default function Bop({x, y, color, name, id = null, edited = false}) {
    const setSelected = useSetRecoilState(selectedBopIdState)
    const setBopEditorPane = useSetRecoilState(bopEditorPaneState);

    const onClick = () => {
        setSelected(id);
        setBopEditorPane({ active: true });
    }

    return <div onClick={onClick} className={`bop-wrapper cursor-pointer ${edited ? 'edited': ''}`} style={{ left: `${x}%`, top: `${50 + y/2}%` }}>
        <div className="bop" style={{ background: color }}>
            <div className="bop-eye" />
            <div className="bop-eye" />
            <div className="bop-mouth" />
        </div>
    </div>
}
