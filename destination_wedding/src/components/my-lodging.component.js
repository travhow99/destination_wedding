import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import Calendar from './utilities/Calendar.component';

const cookies = new Cookies();
let expires = new Date();
expires.setDate(expires.getDate() + 7);

const email = cookies.get('email');

export default class MyLodging extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            email: email,
            type: '',
            location: '',
            excess_beds: null,
            checkin_day: null,
            checkout_day: null,
            notes: '',
            calender: {
                startDate: new Date(),
                endDate: null,
                key: 'selection'
            },
            display_calendar: false,
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onCalendarFocus = this.onCalendarFocus.bind(this);
        this.onCalendarBlur = this.onCalendarBlur.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();


    }

    onChange(e) {
        let name = e.target.name;
        let val = e.target.value;

        this.setState({
            [name]: val,
        });

        console.log(this.state);
    }

    onCalendarFocus() {
        this.setState({
            display_calendar: true,
        })
    }

    onCalendarBlur(e) {
        console.log(e.relatedTarget);
        
        if (!e.relatedTarget) {
            this.setState({
                display_calendar: false,
            })
        }
    }

    render() {
        return (
            <div>
                <div className="row bg-gray">
                    <div className="col">
                        <h1>Your Lodging</h1>
                        <div className="bg-white">

                        </div>
                    </div>
                    <div className="col">
                        <h3>Reservation Details</h3>
                        <form onSubmit={() => this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="type">Reservation Type</label>
                                <select className="form-control" name="type" id="type">
                                    <option>Hotel</option>
                                    <option>Airbnb</option>
                                    <option>Campground</option>
                                    <option>Other</option>
                                </select>
                            </div>


                            <div className="form-group">
                                <label htmlFor=""></label>
                                <input
                                    type="text"
                                    name="location"
                                    className="form-control"
                                    placeholder="Location"
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor=""></label>
                                <textarea
                                    name="notes"
                                    className="form-control"
                                    placeholder="Notes"
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className="form-group"
                                tabIndex="4"
                            >
                                <input 
                                    type="date"
                                    name="date"
                                    className="form-control"
                                    onFocus={this.onCalendarFocus}
                                    onBlur={this.onCalendarBlur}
                                />
                                {this.state.display_calendar && <Calendar />}                                
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        )
    }
}