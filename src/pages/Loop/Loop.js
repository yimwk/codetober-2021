import React from 'react';

class Loop extends React.Component {

    render() {

        function generatePyramid(numberOfLines) {
            var pyramid = [];
            for (let i = 0; i < numberOfLines; i++) {
                var line = "";
                for (let j = numberOfLines - i; j > 0; j--) {
                    line += " ";
                }
                for (let k = 0; k <= i; k++) {
                    line += "* ";
                }
                pyramid.push(line);
            }
            return pyramid
        }

        return <><h1>Day 19: Loop</h1>
            {generatePyramid(10).map(line => {
                return <div>{line}</div>;
            })}
        </>
    }
}

export default Loop;