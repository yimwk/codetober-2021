import './Extinct.css';
import React from 'react';

class Extinct extends React.Component {

    constructor(props) {
        super(props);
        this.makeDinosaurJump = this.makeDinosaurJump.bind(this);

        this.state = {
            jump: false,
            rawr: 0
        }
    }
    
    makeDinosaurJump() {
        this.setState({
            jump: true,
            rawr: this.state.rawr + 1
        })


        setTimeout(() => {
            this.setState({
                ...this.state,
                jump: false
            })

            if (this.state.rawr === 5) {
                this.setState({
                    ...this.state,
                    rawr: 0
                })
            }
        }, 500);
    }

    render() {
        return <><h1>Day 24: Extinct</h1>
            <div  className={this.state.jump ? "dinosaur-frame dinosaur-jump" : "dinosaur-frame"}>
                <div className="dinosaur-head"></div>
                <div className="dinosaur-bottom-jaw"></div>
                <div className="dinosaur-body"></div>
                <div className="dinosaur-back"></div>
                <div className="dinosaur-tail"></div>
                <div className="dinosaur-leg dinosaur-leg-right"></div>
                <div className="dinosaur-leg dinosaur-leg-left"></div>
                <div className="dinosaur-feet dinosaur-feet-right"></div>
                <div className="dinosaur-feet dinosaur-feet-left"></div>
                <div className="dinosaur-hand"></div>
                <div className="dinosaur-palm"></div>
                <div className="dinosaur-eye"></div>
                {this.state.rawr === 5 && <div className="rawr">
                    Rawr!!
                </div>}
            </div>
            <button className="dinosaur-jump-btn" onClick = {this.makeDinosaurJump}>Make Dinosaur Jump</button>
        </>
    }
}

export default Extinct;