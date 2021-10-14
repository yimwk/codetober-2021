import './Tick.css';
import React from 'react';
import { green, red } from '@mui/material/colors';
import { Check, Dangerous } from '@mui/icons-material';

class Tick extends React.Component {

    constructor(props) {
        super(props);

        this.words = [{
            "text": "TEMPALARI",
            "valid": false
        },
        {
            "text": "DESTORY",
            "valid": false
        },
        {
            "text": "ORANGMATIK",
            "valid": false
        },
        {
            "text": "CON9LAN7FIRM",
            "valid": false
        },
        {
            "text": "ALEX",
            "valid": false
        },
        {
            "text": "TEMPORARY",
            "valid": true
        },
        {
            "text": "DESTROY",
            "valid": true
        },
        {
            "text": "MANUAL",
            "valid": true
        },
        {
            "text": "CONFIRM",
            "valid": true
        },
        {
            "text": "ALEXA",
            "valid": true
        }];
    }

    render() {
        return <><h1>Day 14: Tick</h1>
            {this.words.map(word => {
                return <div className="tick-content">
                    <span>
                        {word.valid ? <Check sx={{ color: green[500], fontSize: 50 }} /> : <Dangerous sx={{ color: red[500], fontSize: 50 }} />}
                    </span>
                    <span>
                        {word.text}
                    </span>
                </div>
            })}
        </>
    }
}

export default Tick;