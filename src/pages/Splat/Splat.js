import './Splat.css';
import React from 'react';

class Splat extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            shit: false
        }


        setTimeout(() => {
            this.setState({
                shit: true
            })
        }, 10000);

    }

    render() {
        return <><h1>Day 25: Splat</h1>
            <div className="bird-frame">
                <div className="bird-wing-left"></div>
                <div className="bird-wing-right"></div>
                <div className="bird-leg"></div>
            </div>
            {this.state.shit &&
                Array(200).fill("0").map(shit => {
                    let x = Math.floor(Math.random() * 500) - 250;
                    let y = Math.floor(Math.random() * 200);
                    let height = Math.floor(Math.random() * 50);
                    let width = Math.floor(Math.random() * 10);
                    return <div className="bird-shit" style={{ 
                        transform: `translate(${x}px, ${y}px)`,
                        height: height,
                        width: width
                    }}></div>;
                })
            }
        </>
    }
}

export default Splat;