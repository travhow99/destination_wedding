import React from 'react';
import Card from './Card.component';
import { FaTrain, FaShuttleVan, FaBus, FaLongArrowAltRight } from 'react-icons/fa';
import { MdDriveEta } from 'react-icons/md';

export default class TransitCard extends Card {
    constructor(props) {
        super(props);

        this.state = {
            shifted: 0,
        }
    }

    findIcon(type) {
        switch(type) {
            case 'car':
                return <MdDriveEta />;
            case 'train':
                return <FaTrain />;
            case 'shuttle':
                return <FaShuttleVan />;
            case 'bus':
                return <FaBus />;
            default:
                return null;
        }
    }

    render() {
        return (
            <div className={`card text-light bg-dark shift-left_${this.props.shift}`} style={{border: 'none',}}>
                <img className="card-img-top" src={this.props.image ? require(`../../${this.props.image}`) : ''} alt="" />
                <div className="card-body">
                    <h4 className="card-title mb-0">{this.props.title || "Your Dream Vacation"}</h4>
                    <small className="d-block pb-2">
                        {this.props.from} 
                        <FaLongArrowAltRight className="mx-1" />
                        {this.props.to}
                    </small>
                    <div className="row">
                        <div className="col d-flex">
                            <small className="text-white">Departs {this.props.times}</small> 
                            <small className="ml-auto">
                                {this.findIcon(this.props.type)}
                            </small>
                        </div>
                    </div>
                    <a target="_blank" rel="noopener noreferrer"  /* className="stretched-link" */ href={this.props.link} />
                </div>
                {/* <div className="card-footer">
                    <FaHotel />
                </div> */}
            </div>
        )
    }
}