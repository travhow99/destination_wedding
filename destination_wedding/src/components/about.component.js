import React, { Component } from 'react';
import tetons from '../tetons.jpg';

export default class About extends Component {
    render() {
        return(
            <div className="row bg-dark">
                <div className="col">
                    <img src={tetons} className="img-fluid mt-5"></img>
                </div>
                <div className="col text-light d-flex justify-content-center flex-column">
                    <h2>Travis & Alli</h2>
                    <p className="lead">
                        Travis & Alli met in Colorado in 2013 and have spent their years together admiring and exploring the Rocky Mountains and beyond. They believe in appreciating and enjoying nature and sharing these values with their friends and loved ones.
                    </p>
                </div>
            </div>
        );
    }
}