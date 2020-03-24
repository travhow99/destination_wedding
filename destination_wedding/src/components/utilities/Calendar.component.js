import React, { Component } from 'react';
import { DateRange } from 'react-date-range';

export default class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            calendar: [
                {
                    startDate: new Date(),
                    endDate: new Date(),
                    key: 'selection',
                }
            ],
        }
    }

    render() {
        return <DateRange
                    editableDateInputs={false}
                    onChange={(item) => this.setState({calendar: [item.selection]})}
                    moveRangeOnFirstSelection={false}
                    ranges={this.state.calendar}
                />;
    }
}