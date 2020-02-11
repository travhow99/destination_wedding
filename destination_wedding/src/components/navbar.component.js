import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Destination Wedding</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Flights</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Add Flight</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/update" className="nav-link">Update Flight</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}