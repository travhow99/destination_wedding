import React, { Component } from 'react';
import UserAutosuggest from './user-auto-suggest.component';
import Cookies from 'universal-cookie';
import axios from 'axios';
import logo from '../mountain.png';
import About from './about.component';
import Feature from './feature.component';
import Accommodations from './accomodations.component';
// import aspen from '../aspen.jpg';

const cookies = new Cookies();
let expires = new Date();
expires.setDate(expires.getDate() + 7);

const name = cookies.get('name');
const email = cookies.get('email');

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_name: name ? name.split(' ')[0] : '',
            last_name: name ? name.split(' ')[1] : '',
            email: email,
            users: [],
            error: false,
        }
    }

    componentDidMount() {
        console.log(this.state);
        console.log(cookies.getAll());
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
        }

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then((res) => {
                const data = res.data;
                if (data.status === 'error') {
                    this.setState({
                        error: 'This user already exists!',
                    });
                } else {
                    
                }
            })
            .catch((err) => console.log(err));
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        if (!cookies.get('name')) {
            window.location = '/';
        }

        return (
            <div>
                <div id="main" className="row">
                    <div className="col bg-white">
                        {!this.state.email &&
                        (<form onSubmit={this.onSubmit}>
                            <h3>Welcome back!</h3>
                            <p>Let's get a few of your details.</p>


                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <UserAutosuggest />
                            </div>

                            {this.state.error && 
                                <div className="form-group">
                                    <div className="alert alert-danger" role="alert">
                                        {this.state.error} <a href="../">Log in</a> instead?
                                    </div>
                                </div>
                            }
                        
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>)
                        }
                    </div>
                    <div className="col" style={{
                        backgroundImage: `url('https://lh3.googleusercontent.com/_DvUuRV5BnD61DxQm1DpTsu_Gv5jcwVEQEnzKPvYM4mydE81KGjpZ027R9-DhzGbYiOmmw1AsRvhD0ZCy-HCUbpin4p2YYiT9cMs42xcvd2sOw5TdhmWeAldbgo0NEsx7pNF71Kiv0J3gMtwsr2ubWBkCSsthFwKnaQcV-yV90ljwY9uTZvk4_yJoWdJipPJ1hi936YysAdXZcv6BWRDKJBLY2Y31hy6-p5PctM9TFsTga5OqMF9W5n8WRFWZNBH59rEtFljn6laL1b7SvLcyfewti3cLJeb3zoEtJSWZwZAQNr4WewjCzW4lkkpmIqOrnB7ACqEascrKSg454yG9_fWq9PgtCuPzSM3BToEisI4NekRGj5chdP2BY34LJsXXdt5FKSddFeVA3QvUHBAoEzByEeVco4PFPZwRnzgJeKb9ih-NnYZwgzgh2X5EV-0iZ_QEYxZZwwx0-bO9dlZDqggc8QsStV0JeWeSA2yvtUga_-b--WryhjWpLcfGwWHKsfstvU9bLDBTmNUdMN2BIUpOAyC628k9m-jX6GDQGP3CeuLHa5Eic1XPcNAWuzegdpTwyMAZsEl1TZ4gIR83Mc7LmVdMvSEcQ16CFslUUihAnIzO8jc47hPI7Wih_9opeZS1dIadG1matkOudcEKOEJ2rC2yMSIfK96zg8ylKbYOq4rJlayCvw=w2444-h1832-no')`,
                        backgroundSize: 'cover',
                    }}></div>
                    <div className="position-absolute justify-content-center align-items-center d-flex w-100" style={{height: 340}}>
                        <div className="w-50 px-4 py-5 bg-light shadow-lg" style={{minWidth: 640}}>
                            <h3>Welcome back {this.state.first_name}!</h3>
                            <form className="form-inline">
                                <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>

                                <div className="input-group mb-2 mr-sm-2 w-25">
                                    <div className="input-group-prepend">
                                    <div className="input-group-text">@</div>
                                    </div>
                                    <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Username" />
                                </div>

                                <div className="form-check mb-2 mr-sm-2 w-25">
                                    <input className="form-check-input" type="checkbox" id="inlineFormCheck" />
                                    <label className="form-check-label" htmlFor="inlineFormCheck">
                                    Remember me
                                    </label>
                                </div>


                                <button type="submit" className="btn btn-primary btn-lg mb-2 w-25 ml-auto">Get Started</button>
                            </form>
                        </div>
                    </div>
                </div>
                <About />
                <Feature />
                <Accommodations />
            </div>
        )
    }
}