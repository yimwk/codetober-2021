import './Sprout.css';
import React from 'react';

class Sprout extends React.Component {
    render() {
        return <><h1>Day 20: <a href="https://www.youtube.com/watch?v=widZEAJc0QM">Sprout</a></h1>
            <div className="soil">
                {Array(54).fill("0").map(sprout => {
                    return <span className="sprout">v</span>;
                })}
            </div>
        </>
    }
}

export default Sprout;