import './Stuck.css';
import React from 'react';

class Stuck extends React.Component {
    render() {
        return <><h1>Day 12: Stuck</h1>
            <div className="prison">
                <div className="prisoner">
                    <div className="prisoner-head"></div>
                    <div className="prisoner-body"></div>
                    <div className="prisoner-limb prisoner-left-hand"></div>
                    <div className="prisoner-limb prisoner-right-hand"></div>
                    <div className="prisoner-limb prisoner-left-leg"></div>
                    <div className="prisoner-limb prisoner-right-leg"></div>
                    <div className="prisoner-blood"></div>
                    <div className="floor-blood"></div>
                </div>
                <div className="prison-bars"></div>
            </div>
        </>
    }
}

export default Stuck;