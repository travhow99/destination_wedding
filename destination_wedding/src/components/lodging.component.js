import React, { Component } from 'react';
import AccommodationCard from './utilities/AccommodationCard.component';

import axios from 'axios';
import AreaMap from './utilities/AreaMap.component';

export default class Lodging extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accommodations: [],
            coordinates: [
                {
                    name: 'Holiday Inn Express',
                    lat: 39.988634,
                    lng: -105.871688,
                },
                {
                    name: 'Granby Ranch',
                    lat: 39.988633,
                    lng: -105.871688,
                },
                {
                    name: 'Motel 6',
                    lat: 39.9886325,
                    lng: -105.871688,
                },
            ]
        }
    }

    async componentDidMount() {
        if (this.state.accommodations.length === 0) {
            const response = await axios.get('http://localhost:5000/hotels/');
            const hotels = response.data;

            this.setState({
                accommodations: hotels,
            })

            console.log(this.state);
        }
    }

    render() {
        return (
            <div>
                <div className="row bg-gray">
                    <div className="col">
                        <h1 className="m-4 p-4" style={{lineHeight: 1.5}}>Lodging in and Around<br /><span className="blue">Winter Park, Colorado</span></h1>
                    </div>
                </div>
                <div className="row bg-gray py-4 pl-4">
                    <div className="col">
                        <div className="row">
                            {
                                this.state.accommodations.map((hotel, index) => {
                                    return (
                                        <div className="col-6 mb-4"
                                        key={index}
                                        >
                                            <AccommodationCard 
                                                shift={this.state.shifted}
                                                image={hotel.image} 
                                                title={hotel.name} 
                                                sub={hotel.city} 
                                                link={hotel.url} 
                                                price={hotel.price_range}
                                                distance={hotel.distance}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col px-0">
                        <AreaMap 
                            coordinates={this.state.coordinates}
                        />
                    </div>
                </div>
            </div>
        )
    }
}