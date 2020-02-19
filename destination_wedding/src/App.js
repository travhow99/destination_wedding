import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component.js'
import Entry from './components/entry.component.js'
import Welcome from './components/welcome.component.js'
import FlightList from './components/flight-list.component'
import EditFlight from './components/edit-flight.component'
import CreateFlight from './components/create-flight.component'
import CreateUser from './components/create-user.component'
import UserAutosuggest from './components/user-auto-suggest.component'

function App() {
	return (
		<Router>
			<Navbar />
			<br />
			<Route path="/" exact component={Entry} />
			<Route path="/welcome" exact component={Welcome} />
			<Route path="/flights" component={FlightList} />
			<Route path="/edit/:id" component={EditFlight} />
			<Route path="/create" component={CreateFlight} />
			<Route path="/user" component={CreateUser} />
			<Route path="/test" component={UserAutosuggest} />
		</Router>
	);
}

export default App;
