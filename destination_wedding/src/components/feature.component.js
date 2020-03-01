import React, { Component } from 'react';
import tetons from '../tetons.jpg';

export default class Feature extends Component {
    render() {
        return(
            <div className="row bg-dark">
                <div className="col text-light d-flex justify-content-center flex-column">
                    <h2>Transportation</h2>
                    <ul>
                        <li>Fly to Denver (DIA)</li>
                        <li>Rent a car, or view the numerous shuttle options</li>
                        <li>View the carpool roster with our other guest</li>
                    </ul>
                </div>
                <div className="col">
                    <img src={tetons} className="img-fluid mt-5"></img>
                </div>
            </div>
        );
    }
}