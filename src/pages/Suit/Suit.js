import './Suit.css';
import React from 'react';

class Suit extends React.Component {

    constructor(props) {
        super(props);

        this.cards = ["A", ...this.range(2, 11), "J", "Q", "K"];

        this.suits = [{
            "symbol": "♠",
            "color": "black"
        },
        {
            "symbol": "♥",
            "color": "red"
        },
        {
            "symbol": "♦",
            "color": "red"
        },
        {
            "symbol": "♣",
            "color": "black"
        }];

        this.randomizeCards = this.randomizeCards.bind(this);

        this.state = {
            selectedCard: "",
            selectedSuit: {
                "symbol": "",
                "color": ""
            },
            pokerClass: "poker",
            fade: false
        };
    }

    componentDidMount() {
        this.randomizeCards()
    }

    range(start, end) {
        const length = end - start;
        return Array.from({ length }, (_, i) => start + i);
    }

    randomizeCards() {
        const selectedCard = this.cards[Math.floor(Math.random() * this.cards.length)];
        const selectedSuit = this.suits[Math.floor(Math.random() * this.suits.length)];
        const pokerClass = "poker poker-" + selectedSuit.color

        this.setState({
            selectedCard,
            selectedSuit,
            pokerClass,
            fade: true
        })

        setTimeout(() => this.setState({...this.state, fade: false}), 500);
    }

    render() {
        return <><h1>Day 2: Suit</h1>
            <div className="phone">
                <div>[GAME]</div>
                <div>難易度</div>
                <div className={this.state.fade ? `fade-animation` : null}>
                    <div className={this.state.pokerClass}>
                        {this.state.selectedSuit.symbol}<br />
                        {this.state.selectedCard}
                    </div>
                </div>
            </div>
            <div className="suit">
                <button className="btn" onClick={this.randomizeCards}>Random</button>
                <h2>Playing Cards Suit Representation</h2>
                <div className="poker-black">♠ Physical</div>
                <div className="poker-red">♥ Psychological</div>
                <div className="poker-red">♦ Intelligence</div>
                <div className="poker-black">♣ Cooperation</div>
                <div>Inspired by Alice in Borderland. Watch the Trailer below:</div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/49_44FFKZ1M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </>
    }
}

export default Suit;