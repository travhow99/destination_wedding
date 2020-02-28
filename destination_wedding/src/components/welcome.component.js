import React, { Component } from 'react';
import UserAutosuggest from './user-auto-suggest.component';
import Cookies from 'universal-cookie';
import axios from 'axios';
// import aspen from '../aspen.jpg';
import logo from '../mountains.png';

// console.log(aspen);
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
            <div className="row">
                <div className="col">
                    {this.state.email ?
                    (<h3>Welcome back {this.state.first_name}!</h3>)
                    :
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
                <div className="col" style={{}}></div>
            </div>
        )
    }
}