import './Collide.css';
import React from 'react';

class Collide extends React.Component {
    render() {
        return <><h1>Day 17: Collide</h1>
            <div className="collision-space">
                <div className="collision-ball first-collision-ball"></div>
                <div className="collision-ball second-collision-ball"></div>
            </div>
        </>
    }
}

export default Collide;