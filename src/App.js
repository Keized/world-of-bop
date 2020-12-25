
import './App.css';
import World from "./Pages/World/World";
import {RecoilRoot} from "recoil";

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
