import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaMountain } from 'react-icons/fa';

export default class Navbar extends Component {

    render() {
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-md">
                <Link to="/" className="navbar-brand abs">
                    <FaMountain className="text-secondary" />&nbsp;
                    <span className="text-info">destination</span>
                    <span className="text-secondary">wedding</span>
                    </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Accommodations</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Flights</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">User</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}