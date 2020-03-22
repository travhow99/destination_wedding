import React, { Component } from 'react';
import logo from '../mountain.png';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
let expires = new Date();
expires.setDate(expires.getDate() + 7);


export default class Welcome extends Component {
    constructor(props) {
        super(props);

        this.onChangeInput = this.onChangeInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmitName = this.onSubmitName.bind(this);

        this.state = {
            entry_key: 'fake_entry',
            user_entry: '',
            attendee: false,
            name: '',
            name_input: '',
        }
    }

    componentDidMount() {
        console.log(this.state);
        console.log(cookies.getAll());

        if (cookies.get('name') && cookies.get('attendee')) {
            window.location = '/user';
        }

        if (cookies.get('attendee')) {
            this.setState({
                attendee: true,
            })
        }

    }

    componentDidUpdate() {
        if (this.state.name) {
            cookies.set('name', this.state.name, { 
                path: '/',
                expires: expires,
            });

            window.location = '/user';
        }
    }

    onChangeInput(e) {
        this.setState({
            user_entry: e.target.value,
        })
    }

    onChangeName(e) {
        this.setState({
            name_input: e.target.value,
        })
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.state.user_entry === this.state.entry_key) {
            cookies.set('attendee', true, { 
                path: '/',
                expires: expires,
            });

            this.setState({
                attendee: true,
            });
        } else {
            // Show Error Message
        }
    }

    onSubmitName(e) {
        e.preventDefault();

        this.setState({
            name: this.state.name_input,
        })
    }

    render() {
        return(
            <div style={{textAlign: "center"}}>
                <img src={logo} alt="logo" style={{maxWidth: "50%"}} />
                <h1>Welcome!</h1>
                <p>Enter the sign in code below:</p>

                { !this.state.attendee ? (
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input 
                                onChange={this.onChangeInput} 
                                className="" 
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    ) : (
                    <form onSubmit={this.onSubmitName}>
                        <div className="form-group">
                            
                            <label>Your Name:</label>
                            
                            <input 
                                onChange={this.onChangeName} 
                                className="" 
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    )
                }

            </div>
        )
    }
}