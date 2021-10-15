import './Helmet.css'
import React from 'react';

class Helmet extends React.Component {

    constructor(props) {
        super(props);

        this.helmets = ["squid-game-helmet-square", "squid-game-helmet-triangle", "squid-game-helmet-circle"];

        this.state = {
            showBatSymbol: true,
            showRedHoodHelmet: false
        };

        setTimeout(() => this.setState({
            ...this.state,
            showBatSymbol: false,
            showRedHoodHelmet: true
        }), 10000);
    }

    render() {
        return <><h1>Day 15: Helmet</h1>
            <div className="red-hood">
                {this.state.showBatSymbol && (
                    <div className="bat-symbol">
                        <div className="batman-symbol-wing batman-symbol-wing-left"></div>
                        <div className="batman-symbol-wing batman-symbol-wing-right"></div>
                        <div className="batman-symbol-tail"></div>
                        <div className="batman-symbol-thorn batman-symbol-thorn-left-end"></div>
                        <div className="batman-symbol-thorn batman-symbol-thorn-left-middle"></div>
                        <div className="batman-symbol-thorn batman-symbol-thorn-right-end"></div>
                        <div className="batman-symbol-thorn batman-symbol-thorn-right-middle"></div>
                        <div className="batman-symbol-head"></div>
                        <div className="batman-symbol-ear batman-symbol-left-ear"></div>
                        <div className="batman-symbol-ear batman-symbol-right-ear"></div>
                    </div>
                )}
                {this.state.showRedHoodHelmet && (
                    <div className="red-hood-helmet">
                        <div className="red-hood-helmet-top-vertical-bar red-hood-helmet-top-vertical-bar-left"></div>
                        <div className="red-hood-helmet-top-vertical-bar red-hood-helmet-top-vertical-bar-right"></div>
                        <div className="red-hood-eye red-hood-eye-left"></div>
                        <div className="red-hood-eye red-hood-eye-right"></div>
                        <div className="red-hood-helmet-bottom-vertical-bar red-hood-helmet-bottom-vertical-bar-left"></div>
                        <div className="red-hood-helmet-bottom-vertical-bar red-hood-helmet-bottom-vertical-bar-right"></div>
                        <div className="red-hood-helmet-top-horizontal-bar"></div>
                    </div>
                )}
            </div>
            <div>
                Previous Attempt:
                <div className="squid-game">
                    {this.helmets.map(helmet => {
                        return <div className="squid-game-helmet">
                            <div className="squid-game-helmet-horizontal-bar"></div>
                            <div className="squid-game-helmet-vertical-bar"></div>
                            <div className={helmet}></div>
                        </div>
                    })}
                </div>
            </div>
        </>
    }
}

export default Helmet;