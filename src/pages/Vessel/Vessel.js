import './Vessel.css';
import Heart from './heart.png';
import React from 'react';

class Vessel extends React.Component {

    constructor(props) {
        super(props);

        this.vessels = [
            "Pulmonary Artery",
            "Pulmonary Vein",
            "Vena Cava",
            "Aorta"
        ];
    }
    render() {
        return <><h1>Day 3: Vessel</h1>
            <img className="heartbeat" src={Heart} alt="Heart" style={{
                maxHeight: '50%',
                maxWidth: '50%'
            }} />
            <h2>Blood Vessels in Heart</h2>
            {this.vessels.map(vessel => {
                return <div>{vessel}</div>;
            })}
        </>
    }
}

export default Vessel;