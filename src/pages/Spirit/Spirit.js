import './Spirit.css';
import React from 'react';

class Spirit extends React.Component {
    render() {
        return <><h1>Day 6: Spririt</h1>
            <div className="spirit">
                <div className="hood"></div>
                <div className="face"></div>
                <div className="eye left-eye"></div>
                <div className="eye right-eye"></div>
                <div className="eyebag left-eyebag"></div>
                <div className="eyebag right-eyebag"></div>
                <div className="face-paint face-paint-bottom-left"></div>
                <div className="face-paint face-paint-bottom-right"></div>
                <div className="face-paint face-paint-top-left"></div>
                <div className="face-paint face-paint-top-right"></div>
                <div className="mouth"></div>
            </div>
        </>
    }
}

export default Spirit;