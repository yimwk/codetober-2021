import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    position: 'relative',
    width: '100%',
    height: '100%'
};

class Raven extends React.Component {
    render() {
        return <><h1>Day 5: Raven</h1>
            <div style={{ position: 'relative', width: '50vw', height: '40vh' }}>
                <Map
                    google={this.props.google}
                    zoom={13}
                    style={mapStyles}
                    initialCenter={
                        {
                            lat: 45.2157715,
                            lng: -78.8588987
                        }
                    }
                >
                    <Marker
                        position={
                            {
                                lat: 45.218489821355796,
                                lng: -78.85465459618118
                            }} />
                </Map>
            </div>
        </>
    }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyDqPWSObFGFsKTTOHQ5a9NHUcjoKZilHYA'
})(Raven);