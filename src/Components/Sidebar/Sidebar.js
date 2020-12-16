import Link from "../../Shared/Router/Link";
import './Sidebar.css';
import {useState} from 'react';
import eventMock from "../../Shared/Event/mock";

export default function Sidebar() {
    const [events, setEvents] = useState(eventMock.events);

    return (
        <div id="sidebar">
        </div>
    )
}
