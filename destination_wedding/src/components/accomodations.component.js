import React, { Component } from 'react';
import Card from './utilities/Card.component';

export default class Accommodations extends Component {
    render() {
        return(
            <div className="row bg-dark">
                <div className="col text-light d-flex justify-content-center flex-column">
                    <h2>Travis & Alli</h2>
                    <p className="lead">
                        Travis & Alli met in Colorado in 2013 and have spent their years together admiring and exploring the Rocky Mountains and beyond. They believe in appreciating and enjoying nature and sharing these values with their friends and loved ones.
                    </p>
                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col">
                            <Card />
                            <p>test</p>
                        </div>
                        <div className="col">
                            <p>test</p>
                        </div>
                        <div className="col">
                            <p>test</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}