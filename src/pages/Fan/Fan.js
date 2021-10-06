import './Fan.css';
import React from 'react';

class Fan extends React.Component {
    render() {
        return <><h1>Day 7: Fan</h1>
            <div className="fan">
                <div className="fan-blade-center"></div>
                <div className="fan-blade"></div>
                <div className="fan-blade"></div>
                <div className="fan-blade"></div>
                <div className="fan-blade"></div>
            </div>
        </>
    }
}

export default Fan;