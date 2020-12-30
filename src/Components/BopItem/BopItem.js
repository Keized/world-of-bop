import { useRecoilValue, useSetRecoilState } from 'recoil';
import { bopEditorPaneState } from '../../Atoms/editor';
import { bopDetails, selectedBopId } from '../../Recoil/atoms';
import Bop from '../Bop/Bop';

export default function BopItem ({id}) {
    const setSelected = useSetRecoilState(selectedBopId)
    const setBopEditorPane = useSetRecoilState(bopEditorPaneState);
    const details = useRecoilValue(bopDetails(id))

    const onClick = () => {
        setSelected(id);
        setBopEditorPane({ active: true });
    }

    if (!details || !Object.keys(details).length) {
        return <></>
    }

    const {positions: [x, y], color} = details;
    return <div onClick={onClick}>
        <Bop color={color} x={x} y={y} onClick={onClick}/>
    </div>
}

