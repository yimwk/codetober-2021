import './Crystal.css';
import CrystalLogo from './crystal.png';
import React from 'react';

class Crystal extends React.Component {
    render() {
        return <><h1>Day 1: Crystal</h1>
            <img className="Crystal-logo" src={CrystalLogo} alt="Crystal Logo" style={{
                maxHeight: '50%',
                maxWidth: '50%'
            }}/>
            <p>Learn more about <a href="https://crystal-lang.org/">Crystal Programming Language</a> here!</p>
            <iframe src="https://play.crystal-lang.org/#/r/bzbw" height="500" width="500" title="crystal-demo"></iframe>
            <p>Take note that the code is based on when it is compiled. If you want it the date and prompt to update, click Edit and then Compile.</p>
        </>
    }
}

export default Crystal;