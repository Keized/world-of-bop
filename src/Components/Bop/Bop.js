import './Bop.css';

export default function Bop({color, x, y, edited = false, onClick = () => {}}) {
    return <div onClick={onClick} className={`bop-wrapper cursor-pointer ${edited ? 'edited': ''}`} style={{ left: `${x}%`, top: `${50 + y/2}%` }}>
        <div className="bop" style={{ background: color }}>
            <div className="bop-eye" />
            <div className="bop-eye" />
            <div className="bop-mouth" />
        </div>
    </div>
}
