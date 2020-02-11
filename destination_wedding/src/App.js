import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component.js'
import FlightList from './components/flight-list.component'
import EditFlight from './components/edit-flight.component'
import CreateFlight from './components/create-flight.component'
import CreateUser from './components/create-user.component'

function App() {
	return (
		<Router>
			<Navbar />
			<br />
			<Route path="/" exact component={FlightList} />
			<Route path="/edit/:id" component={EditFlight} />
			<Route path="/create" component={CreateFlight} />
			<Route path="/user" component={CreateUser} />
		</Router>
	);
}

export default App;
