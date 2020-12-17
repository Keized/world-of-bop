
import './App.css';
import World from "./Pages/World/World";
import {RecoilRoot} from "recoil";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {

    return (
            <RecoilRoot>
                <div className="flex">
                    <Sidebar />
                    <World/>
                </div>
            </RecoilRoot>
    );
}

export default App;
