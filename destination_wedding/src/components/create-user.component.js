import React, { Component } from 'react';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);

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
        })
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
                <form action="" method="POST" role="form">
                    <legend>Form title</legend>
                
                    <div className="form-group">
                        <label htmlFor="">label</label>
                        <input type="text" className="form-control" id="" placeholder="Input field" />
                    </div>
                
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                
                <p>Let's create a user!</p>
            </div>
        )
    }
}