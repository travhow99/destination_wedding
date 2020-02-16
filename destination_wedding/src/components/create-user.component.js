import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
let expires = new Date();
expires.setDate(expires.getDate() + 7);

let name = cookies.get('name');

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_name: name ? name.split(' ')[0] : '',
            last_name: name ? name.split(' ')[1] : '',
            email: '',
            phone_number: '',
            users: [],
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

    onChangeFirstName(e) {
        this.setState({
            first_name: e.target.value,
        })
    }

    onChangeLastName(e) {
        this.setState({
            last_name: e.target.value,
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        })
    }

    onChangePhoneNumber(e) {
        this.setState({
            phone_number: e.target.value,
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            phone_number: this.state.phone_number,
        }

        console.log(user);

        window.location = '/';
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
                            <label htmlFor="firstName">First name</label>
                        <input 
                            type="text"
                            onChange={this.onChangeFirstName} 
                            className="form-control" />
                    </div>

                    <div className="form-group">
                            <label htmlFor="lastName">Last name</label>
                        <input 
                            type="text"
                            onChange={this.onChangeLastName} 
                            className="form-control" />
                    </div>

                    <div className="form-group">
                            <label htmlFor="email">Email address</label>
                        <input 
                            type="email"
                            onChange={this.onChangeEmail} 
                            className="form-control" />
                    </div>

                    <div className="form-group">
                            <label htmlFor="phoneNumber">Phone number</label>
                        <input 
                            type="tel"
                            onChange={this.onChangePhoneNumber} 
                            className="form-control" />
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
                
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
                
            </div>
        )
    }
}