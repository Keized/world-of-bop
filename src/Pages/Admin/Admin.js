import Route from '../../Shared/Router/Route';
import Home from '../Home';
import './Admin.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Workouts from "../Workouts/Workouts";

export default function Admin() {
    return (
        <div id="admin-root">
            <Sidebar />

            <main>
                <Route path={'/'} exact>
                    <Home />
                </Route>
                <Route path={'/workouts'} exact>
                    <Workouts />
                </Route>
            </main>
        </div>
    )
}
