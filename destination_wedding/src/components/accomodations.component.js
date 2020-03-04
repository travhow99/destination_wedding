import React, { Component } from 'react';
import AccommodationCard from './utilities/AccommodationCard.component';
import tetons from '../tetons.jpg';
import axios from 'axios';

export default class Accommodations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accommodations: [],
        }
    }

    async componentDidMount() {
        if (this.state.accommodations.length === 0) {
            const response = await axios.get('http://localhost:5000/hotels/');
            const hotels = response.data;
            console.log(hotels);

            const imageArray = [];

            hotels.map((hotel) => {
                // imageArray.push(require(`http://localhost:${hotel.image}`));
            })



            this.setState({
                accommodations: hotels,
            });

            console.log(this.state);
        }
    }    

    render() {
        return(
            <div className="row bg-dark" style={{paddingTop: 160, paddingBottom: 160}}>
                <div className="col text-light d-flex justify-content-center flex-column">
                    <h2>Lodging Options</h2>
                    <p>
                        Whether you're seeking the freedom of an Airbnb, a secluded cabin, or a quiet hotel, we have plenty of options to stay nearby.
                    </p>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        {/* Allow for n hotels pulled from DB, scroll beyond screem */}
                        {
                            this.state.accommodations.map((hotel, index) => {
                                console.log(hotel);
                                return (
                                    <div key={index} className="col-4">
                                        <AccommodationCard 
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
                <div className="col-12 bg-dark">
                    <div className="col text-center mt-4 text-primary">
                        <span>View Attendee Vacancies</span>
                    </div>
                </div>
            </div>
        );
    }
}