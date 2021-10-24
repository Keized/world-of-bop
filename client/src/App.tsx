import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import NewWorld from "./Pages/NewWorld/NewWorld";
import {Web3Provider} from "./Web3";

function App() {

    return (
        <Web3Provider>
            <div className="flex">
                <NewWorld/>
            </div>
        </Web3Provider>
    );
}

export default App;
