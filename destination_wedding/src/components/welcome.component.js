import React, { Component } from 'react';
import logo from '../mountains.png';

export default class Welcome extends Component {
    constructor(props) {
        super(props);

        this.onChangeInput = this.onChangeInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            entry_key: 'fake_entry',
            user_entry: '',
        }
    }

    onChangeInput(e) {
        this.setState({
            user_entry: e.target.value,
        })
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.state.user_entry === this.state.entry_key) {
            alert('WELCOME!');
        } else {
            // Show Error Message
        }
    }

    render() {
        return(
            <div style={{textAlign: "center"}}>
                <img src={logo} style={{maxWidth: "50%"}} />
                <h1>Welcome!</h1>
                <p>Enter the sign in code below:</p>

                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <input 
                            onChange={this.onChangeInput} 
                            className="" />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                </form>

            </div>
        )
    }
}