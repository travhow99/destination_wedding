import React, { Component } from 'react';
import Card from './Card.component';
import { FaHotel } from 'react-icons/fa';

export default class AccommodationCard extends Card {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.image);
        return (
            <div className="card text-dark bg-light" style={{border: 'none',}}>
                <img className="card-img-top" src={this.props.image ? require(`../../${this.props.image}`) : ''} alt="" />
                <div className="card-body">
                    <h4 className="card-title mb-0">{this.props.title || "Your Dream Vacation"}</h4>
                    <small>{this.props.sub || "Winter Park"}</small><br />
                    <a target="_blank" className="card-text" href={this.props.link}>{this.props.link}</a><br />
                    <small className="text-primary">{this.props.price}</small><br />
                    <FaHotel className='mt-3' /><br />
                </div>
        </div>
        )
    }
}