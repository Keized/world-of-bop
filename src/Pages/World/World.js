import "./World.css";
import '../../Components/Dot/Dot.css';
import {useRecoilState, useSetRecoilState} from "recoil";
import {useEffect, useRef} from "react";
import {dotSelectorFamily, dotsSourceState, dotsState, dotStateFamily} from "../../Atoms/dot";


export default function World() {
    const [state, setState] = useRecoilState(dotsState);
    let rendered = useRef(0);

    // useEffect(() => {
    //     console.log('render: ', rendered.current++ );
    // })

    useEffect(() => {
        const source = [
            {
                id: 1,
                name: 'bop',
                color: '#000000',
                position: [0, 0]
            },
            {
                id: 2,
                name: 'bap',
                color: '#00FF00',
                position: [0, 0]
            }
        ];

        setState(source.reduce((acc, {id, ...elem}) => {
            return {...acc, [id]: elem}
        }, {}));

    }, [])

    useEffect(() => {
        console.log(state);
    }, [state])

    function submit() {
        console.log(state);
    }

    return <div id="world" className="flex-1">
        {
            Object.keys(state).map(key => <Dot id={key} key={key} />)
        }
    </div>
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function Dot({id = 1}) {

    let rendered = useRef(0);

    const [state, setState] = useRecoilState(dotStateFamily(id))
    const persist = useSetRecoilState(dotSelectorFamily(id))

    function p() {
        persist(state);
    }

    function changeColor() {
        const color = getRandomColor()
        setState({...state, color});
    }

    return  <>
        <button onClick={p}>Persist</button>
        <div className="dot" onClick={changeColor} style={{ background: state?.color }}>
            {state?.id}
        </div>
    </>
}

