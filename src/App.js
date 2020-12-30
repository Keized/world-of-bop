import './App.css';
import {Suspense} from 'react';
import {RecoilRoot} from "recoil";
import World from "./Pages/World";
import ErrorBoundary from './Components/ErrorBoundary';

function App() {
    return (
        <RecoilRoot>
            <div className="flex">
                <ErrorBoundary>
                    <Suspense fallback={<div>loading</div>}>
                        <World/>
                    </Suspense>
                </ErrorBoundary>
            </div>
        </RecoilRoot>
    );
}

export default App;
