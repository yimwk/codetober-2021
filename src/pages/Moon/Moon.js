import './Moon.css';
import React from 'react';

class Moon extends React.Component {
    render() {
        return <><h1>Day 18: Moon</h1>
            <div className="space">
                <div className="moon"></div>
                <div className="moon-shadow"></div>
            </div>
        </>
    }
}

export default Moon;