import {useSetRecoilState} from "recoil";
import {bopEditorPaneState} from "../../Recoil/atoms";

export default function EditorButton() {
    const setBopEditorPane = useSetRecoilState(bopEditorPaneState)

    const onClick = () => {
        setBopEditorPane({active: true});
    }

    return <div>
        <button className="rounded-3xl bottom-8 right-8 absolute w-12 h-12 bg-yellow-800 text-white focus:outline-none" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"  />
            </svg>
        </button>
    </div>
}
