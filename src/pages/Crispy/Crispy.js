import React from 'react';
import { Wheel } from 'react-custom-roulette'

class Crispy extends React.Component {

    constructor(props) {
        super(props);
        this.spinWheel = this.spinWheel.bind(this);

        this.state = {
            data: [
                { option: "KFC" },
                { option: "Texas Chicken" },
                { option: "Mcdonald's" },
                { option: "A&W" },
                { option: "Burger King" },
                { option: "Marrybrown" },
                { option: "4Fingers" },
                { option: "KyoChon" }
            ],
            startSpinWheel: false,
            prizeNumber: 0
        }
    }

    spinWheel() {
        const newPrizeNumber = Math.floor(Math.random() * this.state.data.length)
        this.setState({
            ...this.state,
            startSpinWheel: true,
            prizeNumber: newPrizeNumber
        })
    }

    render() {
        return <><h1>Day 28: Crispy</h1>
            <h2>Place to eat Crispy Fried Chicken</h2>
            <Wheel
                mustStartSpinning={this.state.startSpinWheel}
                prizeNumber={this.state.prizeNumber}
                data={this.state.data}
                onStopSpinning={() => {
                    this.setState({
                        ...this.state,
                        startSpinWheel: false
                    })
                }}
                backgroundColors={['orange', 'grey']}
                textColors={['white']}
            />
            <button onClick={this.spinWheel}>SPIN</button>
        </>
    }
}

export default Crispy;