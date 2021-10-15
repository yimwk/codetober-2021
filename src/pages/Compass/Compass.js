import './Compass.css';
import React from 'react';

class Compass extends React.Component {
    render() {
        return <><h1>Day 16: Compass</h1>
            <div className="compass">
                <div className="compass-border"></div>
                <div className="compass-hand compass-red-hand"></div>
                <div className="compass-hand compass-silver-hand"></div>
                <div className="compass-north">N</div>
                <div className="compass-south">S</div>
                <div className="compass-east">E</div>
                <div className="compass-west">W</div>
            </div>
        </>
    }
}

export default Compass;