import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { MdLocationCity } from 'react-icons/md';

const Details = ({ text }) => (
    <div style={{
        color: 'white', 
        background: 'grey',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'    
    }}>
        {text}
    </div>
);

class AreaMap extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    static defaultProps = {
        key: process.env.REACT_APP_MAP_API,
        /* center: {
            lat: -105,
            lng: 39,
        }, */
        center: {lat: 39.988632, lng: -105.871688},
        zoom: 11,
    };

    render() {
        console.log(this.props.key);

        let coordinates = this.props.coordinates; 
        console.log(coordinates);

        return (
            <div style={{ height: '80vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: this.props.key }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                >
                    {
                        coordinates.map((location, index) => {
                            return (
                                <Details 
                                    key={index}
                                    lat={location.lat}
                                    lng={location.lng}
                                    text={location.name}
                                />
                            )
                        })
                    }

                </GoogleMapReact>
            </div>
        )
    }
}

export default AreaMap;