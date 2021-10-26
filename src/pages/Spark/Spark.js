import './Spark.css';
import React from 'react';

class Spark extends React.Component {
    render() {
        return <><h1>Day 27: Spark</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/njl3cvOsDIA?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="shooting-star"></div>
            
            {Array(1000).fill("0").map((star, index) => {
                    let height = Math.floor(Math.random() * 800) + 1;
                    let right = Math.floor(Math.random() * 1000) + 1;
                    let animation = Math.floor(Math.random() * 5) + 1;
                    let colors = ['white', 'rgb(44, 151, 229)', 'rgb(235, 177, 166)', 'rgb(240, 77, 186)', 'rgb(222, 90, 139)', 'rgb(247, 213, 201)']
                    let backgroundColor = Math.floor(Math.random() * 5);
                    return <div className="shooting-star" style={{
                        'height': `${height}px`,
                        'right': `${right}px`,
                        'background-color': colors[backgroundColor],
                        'animation': `shooting-star ${animation}s linear forwards`,
                        'animation-delay': `${index}s`
                    }}></div>
                })
            }
        </>
    }
}

export default Spark;