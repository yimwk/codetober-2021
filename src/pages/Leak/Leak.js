import React from 'react';
import MemoryStatsComponent from 'react-memorystats';

class Leak extends React.Component {

    constructor(props) {
        super(props);
        this.startMemoryLeak = this.startMemoryLeak.bind(this);

        this.state = {
            showMemory: false
        }
    }
    
    startMemoryLeak() {
        this.setState({
            showMemory: true
        })

        let someObjects = [];
        let count = 1;

        setTimeout(() => {
            while(count < 50000000) {
                someObjects.push({});
                count++;
            }
        }, 10000);
    }

    render() {
        return <><h1>Day 23: Leak</h1>
            {this.state.showMemory && <MemoryStatsComponent corner="center" />}
            <button onClick={this.startMemoryLeak}>Start Memory Leak</button>
        </>
    }
}

export default Leak;