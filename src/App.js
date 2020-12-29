import './App.css';
import {RecoilRoot} from "recoil";
import World from "./Pages/World";

function App() {
    return (
        <RecoilRoot>
            <div className="flex">
                <World/>
            </div>
        </RecoilRoot>
    );
}

export default App;
