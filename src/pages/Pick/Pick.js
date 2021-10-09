import './Pick.css';
import React from 'react';
import Images from './images/index.js'

class Pick extends React.Component {

    constructor(props) {
        super(props);

        this.pokemonList = [
            {
                "name": "Blastoise",
                "source": Images.Blastoise
            },
            {
                "name": "Bulbasaur",
                "source": Images.Bulbasaur
            },
            {
                "name": "Charmander",
                "source": Images.Charmander
            },
            {
                "name": "Charmeleon",
                "source": Images.Charmeleon
            },
            {
                "name": "Eevee",
                "source": Images.Eevee
            },
            {
                "name": "Haunter",
                "source": Images.Haunter
            },
            {
                "name": "Mewtwo",
                "source": Images.Mewtwo
            },
            {
                "name": "Pichu",
                "source": Images.Pichu
            },
            {
                "name": "Pikachu",
                "source": Images.Pikachu
            },
            {
                "name": "Psyduck",
                "source": Images.Psyduck
            },
            {
                "name": "Raichu",
                "source": Images.Raichu
            },
            {
                "name": "Snorlax",
                "source": Images.Snorlax
            },
            {
                "name": "Squirtle",
                "source": Images.Squirtle
            },
            {
                "name": "Umbreon",
                "source": Images.Umbreon
            },
            {
                "name": "Vaporeon",
                "source": Images.Vaporeon
            },
        ];

        this.randomizePokemon = this.randomizePokemon.bind(this);

        this.state = {
            selectedPokemon: {
                "name": "",
                "source": ""
            },
            showPokeball: true
        };

        setTimeout(() => this.setState({...this.state, showPokeball: false}), 1000);
    }

    componentDidMount() {
        this.randomizePokemon()
    }

    randomizePokemon() {
        const selectedPokemon = this.pokemonList[Math.floor(Math.random() * this.pokemonList.length)];

        this.setState({
            selectedPokemon,
            showPokeball: true
        })

        setTimeout(() => this.setState({...this.state, showPokeball: false}), 1000);
    }

    render() {
        return <><h1>Day 10: Pick</h1>
            {this.state.showPokeball ? (
                <div>
                    <img className="pokeball" src={Images.Pokeball} alt="Pokeball"/>
                </div>
            ) : (
                <div className="pokemon">
                    <img src={this.state.selectedPokemon.source} alt="Pokemon"/>
                    <div>{this.state.selectedPokemon.name}</div>
                    <div>I choose you!</div>
                    <button className="btn-pokemon" onClick={this.randomizePokemon}>Gatcha Pokemon</button>
                </div>
            )}
        </>
    }
}

export default Pick;