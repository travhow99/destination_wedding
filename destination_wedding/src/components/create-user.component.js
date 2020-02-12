import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            users: [],
        }
    }

    componentDidMount() {
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

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <h3>Welcome!</h3>
                    <p>Who are you exactly?</p>

                    <div className="form-group">
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
                    </div>
                
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
                
            </div>
        )
    }
}