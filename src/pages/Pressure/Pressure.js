import './Pressure.css';
import React from 'react';

class Pressure extends React.Component {
    render() {
        return <><h1>Day 9: Pressure</h1>
            <div className="balloon">
                <div className="balloon-round-part"></div>
                <div className="balloon-long-part"></div>
                <div className="wind">~</div>
                <div className="wind">~</div>
                <div className="wind">~</div>
            </div>
        </>
    }
}

export default Pressure;