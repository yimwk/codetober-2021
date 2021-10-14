import './Helmet.css'
import React from 'react';

class Helmet extends React.Component {

    constructor(props) {
        super(props);

        this.helmets = ["helmet-square", "helmet-triangle", "helmet-circle"];
    }

    render() {
        return <><h1>Day 15: Helmet</h1>
            <div className="squid-game">
                {this.helmets.map(helmet => {
                    return <div className="helmet">
                        <div className="helmet-horizontal-bar"></div>
                        <div className="helmet-vertical-bar"></div>
                        <div className={helmet}></div>
                    </div>
                })}
            </div>
        </>
    }
}

export default Helmet;