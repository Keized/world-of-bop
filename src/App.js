import './App.css';
import World from "./Pages/World/World";
import {RecoilRoot} from "recoil";
import {Suspense} from 'react';

function App() {
    return (
        <RecoilRoot>
            <div className="flex">
                <Suspense fallback={<>Loading</>}>
                    <World/>
                </Suspense>
            </div>
        </RecoilRoot>
    );
}

export default App;
