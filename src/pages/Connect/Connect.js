import './Connect.css';
import React from 'react';
import { Computer, Wifi } from '@mui/icons-material';

class Connect extends React.Component {
    render() {
        return <><h1>Day 26: Connect</h1>
            <Wifi sx={{ fontSize: 100 }} />
            <div className="computer-connection"></div>
            <div className="computer-frame">
                <Computer sx={{ fontSize: 100 }} />
                <Computer sx={{ fontSize: 100 }} />
            </div>
        </>
    }
}

export default Connect;