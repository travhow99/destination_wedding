import React, { Component } from 'react';
import { FaHotel } from 'react-icons/fa';

export default class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.image);
        return (
            <div className="card text-dark bg-light" style={{border: 'none',}}>
                <img className="card-img-top" src={this.props.image ? require(`../../${this.props.image}`) : ''} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{this.props.title || "Your Dream Vacation"}</h4>
                    <small>{this.props.sub || "Winter Park"}</small>
                    <p className="card-text">{this.props.link}</p>
                    <FaHotel />
                </div>
        </div>
        )
    }
}