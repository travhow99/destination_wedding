import React, { Component } from 'react';

export default class CreateFlight extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            flight_number: '',
            airline: '',
            departure_city: '',
            arrival_city: '',
            date: new Date(),
            users: [],
        }
    }

    render() {
        return (
            <div>
                <p>Let's create a flight!</p>
            </div>
        )
    }
}