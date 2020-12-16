import RouterProvider from './Shared/Router/RouterProvider';

import './App.css';
import World from "./Pages/World/World";
import {RecoilRoot} from "recoil";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {

    return (
        <RouterProvider>
            <RecoilRoot>
                <Sidebar />
                <World/>
            </RecoilRoot>
        </RouterProvider>
    );
}

export default App;
