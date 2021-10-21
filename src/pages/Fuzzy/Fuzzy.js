import './Fuzzy.css';
import Casino from './casino.jpg';
import React from 'react';

class Fuzzy extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fuzzy: true
        };

        this.updateFuzzy = this.updateFuzzy.bind(this);
    }

    componentDidMount() {
        this.updateFuzzy()
    }

    updateFuzzy() {
        this.setState({
            fuzzy: !this.state.fuzzy
        })
    }

    render() {
        return <><h1>Day 21: Fuzzy</h1>
            <div>Somewhere I want to go: </div>
            <img className={this.state.fuzzy ? null : 'fuzzy-image'} src={Casino} alt="Casino" style={{
                maxHeight: '50%',
                maxWidth: '50%',
                padding: '50px'
            }}/>
            <button className="fuzzy-btn" onClick={this.updateFuzzy}>{this.state.fuzzy ? 'Fuzzy' : 'Reveal'}</button>
        </>
    }
}

export default Fuzzy;