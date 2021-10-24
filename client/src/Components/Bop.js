import './Bop.css';

export default function Bop({x, y, color, name, id, onClick}) {

    return <div onClick={onClick} className={`bop-wrapper cursor-pointer`} style={{ left: `${x}%`, top: `${50 + y/2}%` }}>
        <div className="bop" style={{ background: color }}>
            <div className="bop-eye" />
            <div className="bop-eye" />
            <div className="bop-mouth" />
        </div>
    </div>
}
