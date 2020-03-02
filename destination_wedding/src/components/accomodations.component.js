import React, { Component } from 'react';
import Card from './utilities/Card.component';
import tetons from '../tetons.jpg';

export default class Accommodations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accommodations: [
                {
                    title: 'Holiday Inn Express',
                    location: 'Fraser',
                    image: tetons,
                },
                {
                    title: 'Fraser Valley Inn',
                    location: 'Fraser',
                    image: tetons,
                },
                {
                    title: 'Winter Park Lodge',
                    location: 'Winter Park',
                    image: tetons,
                },
            ],
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
                <div className="col-8">
                    <div className="row">
                        {/* Allow for n hotels pulled from DB, scroll beyond screem */}
                        {
                            this.state.accommodations.map((hotel, index) => {
                                return (
                                    <div key={index} className="col">
                                        <Card image={hotel.image} title={hotel.title} sub={hotel.location} link=''/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}