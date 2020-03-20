import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

// const Details = {{ text }} => <div>{text}</div>;

class AreaMap extends Component {
    
    static defaultProps = {
        key: process.env.REACT_APP_MAP_API,
        center: {
            lat: 50,
            lng: 30,
        },
        zoom: 11,
    };

    render() {
        return (
            <div style={{ height: '80vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: this.props.key }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}                    
                >
                    {/* <Details 
                        lat={51}
                        lng={30.33}
                        text="My Marker"
                    /> */}
                </GoogleMapReact>
            </div>
        )
    }
}

export default AreaMap;