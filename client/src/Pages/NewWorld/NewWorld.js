import './NewWorld.css'
import Bop from "../../Components/Bop";

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export default function NewWorld() {
    return <div id="world" className="flex-1 relative overflow-hidden flex h-screen">
        <div id="landscape">
            <div className="sun" />
            <div className="moon" />
            <div className="foreground1" />
            <div className="foreground2" />
            <div className="foreground3">
                <div className="tree tree1" />
            </div>
        </div>
        <Bop
            name={"Kev"}
            id={1}
            color={getRandomColor()}
            x={50}
            y={25}
            key={1}
        />
    </div>
}
