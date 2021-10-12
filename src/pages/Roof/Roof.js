import './Roof.css';
import React from 'react';

class Roof extends React.Component {
    render() {
        return <><h1>Day 13: Roof</h1>
            <div className="house-container">
                <div className="house"></div>
                <div className="roof left-roof"></div>
                <div className="roof right-roof"></div>
            </div>
        </>
    }
}

export default Roof;