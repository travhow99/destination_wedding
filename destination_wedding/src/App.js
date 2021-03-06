import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import Navbar from './components/navbar.component.js';
import Entry from './components/entry.component.js';
import Welcome from './components/welcome.component.js';
import Lodging from './components/lodging.component';
import FlightList from './components/flight-list.component';
import EditFlight from './components/edit-flight.component';
import CreateFlight from './components/create-flight.component';
import CreateUser from './components/create-user.component';
import MyLodging from './components/my-lodging.component';
import Footer from './components/footer.component.js';

import Cookies from 'universal-cookie';

const cookies = new Cookies();
// var is_root = location.pathname == "/";

// console.log(process.env.REACT_APP_HOST, window.location.href);

if (!cookies.get('email') && (window.location.pathname !== "/" && window.location.pathname !== "/user")) {
	console.log('not found');
	window.location = '/';
} else {
	console.log('email:', cookies.get('email'));
}

function App() {
	return (
		<Router>
			<Navbar />
			<div className="container-fluid" style={{paddingBottom: 60}}>
				<Route path="/" exact component={Entry} />
				<Route path="/welcome" exact component={Welcome} />
				<Route path="/lodging" component={Lodging} />
				<Route path="/my-lodging" component={MyLodging} />
				<Route path="/flights" component={FlightList} />
				<Route path="/edit/:id" component={EditFlight} />
				<Route path="/create" component={CreateFlight} />
				<Route path="/user" component={CreateUser} />
			</div>
			<Footer />
		</Router>
	);
}

export default App;
