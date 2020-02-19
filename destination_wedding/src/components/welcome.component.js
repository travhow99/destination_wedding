import React, { Component } from 'react';
import UserAutosuggest from './user-auto-suggest.component';
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();
let expires = new Date();
expires.setDate(expires.getDate() + 7);

let name = cookies.get('name');

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_name: name ? name.split(' ')[0] : '',
            last_name: name ? name.split(' ')[1] : '',
            email: '',
            users: [],
            error: false,
        }
    }

    componentDidMount() {
        console.log(this.state);
        console.log(cookies.getAll());
    
        this.setState({
            users: ['test user'],
            first_name: 'Test',
        });
        console.log(this.state);
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
                
                <form onSubmit={this.onSubmit}>
                    <h3>Welcome!</h3>
                    <p>Let's get a few of your details.</p>


                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <UserAutosuggest />
                        {/* <input 
                            type="email"
                            onChange={this.onChangeEmail} 
                            className="form-control"
                            required /> */}
                    </div>

                    {/* <div className="form-group">
                        <label>Your Name</label>
                        
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeFirstName}>
                            {
                                this.state.users.map((user) => {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                        </option>;
                                })
                            }
                        </select>
                    </div> */}
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
                </form>
                
            </div>
        )
    }
}