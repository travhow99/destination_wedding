import React from 'react';
import Card from './Card.component';
import { MdDriveEta } from 'react-icons/md';

export default class AccommodationCard extends Card {
    render() {
        console.log(this.props.image);
        return (
            <div className="card text-dark bg-light" style={{border: 'none',}}>
                <img className="card-img-top" src={this.props.image ? require(`../../${this.props.image}`) : ''} alt="" />
                <div className="card-body">
                    <h4 className="card-title mb-0">{this.props.title || "Your Dream Vacation"}</h4>
                    <small className="d-block pb-2">{this.props.sub || "Winter Park"}</small>
                    <a target="_blank" rel="noopener noreferrer" className="card-text" href={this.props.link}>{this.props.link}</a><br />
                    <div className="row">
                        <div className="col d-flex">
                            <small className="text-primary">{this.props.price}</small> <small className="ml-auto">
                                <MdDriveEta />
                                {this.props.distance}
                            </small>
                        </div>
                    </div>
                </div>
                {/* <div className="card-footer">
                    <FaHotel />
                </div> */}
            </div>
        )
    }
}