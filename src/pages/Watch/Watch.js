import './Watch.css';
import React from 'react';

class Watch extends React.Component {
    render() {
        return <><h1>Day 8: Watch</h1>
            <div className="watch">
                <div className="watch-border"></div>
                <div className="watch-marker"></div>
                <div className="watch-hand"></div>
            </div>
        </>
    }
}

export default Watch;