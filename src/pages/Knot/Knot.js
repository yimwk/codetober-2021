import './Knot.css';
import React from 'react';

class Knot extends React.Component {
    render() {
        return <><h1>Day 4: Knot</h1>
            <div className="knot">
                <div className="rope"></div>
                <div className="rope-knot"></div>
                <div className="rope-hole"></div>
            </div>
        </>
    }
}

export default Knot;