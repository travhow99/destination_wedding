import React, { Component } from 'react';
import AccommodationCard from './utilities/AccommodationCard.component';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import axios from 'axios';

export default class Accommodations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accommodations: [],
            shifted: 0,
        }

        this.shift = this.shift.bind(this);
    }

    async componentDidMount() {
        if (this.state.accommodations.length === 0) {
            const response = await axios.get('http://localhost:5000/hotels/');
            const hotels = response.data;
            console.log(hotels);

            this.setState({
                accommodations: hotels,
            });

            console.log(this.state);
        }
    }

    shift = (direction) => {
        console.log('clicky');
        let shift = direction ===  'right' ?  this.state.shifted + 1 : this.state.shifted - 1;
        
        this.setState({
            shifted: shift,
        });

        console.log(this.state);
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
                <div className="col-md-9">
                    <div className="card-deck feature-scroll">
                        {
                            this.state.accommodations.map((hotel, index) => {
                                return (
                                    <AccommodationCard 
                                        shift={this.state.shifted}
                                        key={index}
                                        image={hotel.image} 
                                        title={hotel.name} 
                                        sub={hotel.city} 
                                        link={hotel.url} 
                                        price={hotel.price_range}
                                        distance={hotel.distance}
                                    />
                                )
                            })
                        }
                        {
                            this.state.shifted > 0
                            &&
                            <FaArrowCircleLeft onClick={() => this.shift('left')} className="floating-scroll left" />
                        }
                        {
                            this.state.shifted < this.state.accommodations.length - 2
                            &&
                            <FaArrowCircleRight onClick={() => this.shift('right')} className="floating-scroll right" />
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