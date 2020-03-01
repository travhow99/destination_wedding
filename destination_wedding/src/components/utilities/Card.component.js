import React, { Component } from 'react';

export default class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card text-white bg-primary">
                <img className="card-img-top" src={this.props.image} alt="" />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                </div>
        </div>
        )
    }
}