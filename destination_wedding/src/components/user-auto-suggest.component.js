import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = (suggestion) => suggestion.first_name;

// Use your imagination to render suggestions.
const renderSuggestion = (suggestion) => (
    <div>
        {suggestion.first_name}
    </div>
);

export default class UserAutosuggest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            suggestions: [],
            users: [],
        }
    }

    async componentDidMount() {
        if (this.state.users.length === 0) {
            const response = await axios.get('http://localhost:5000/users/');
            const users = response.data;
            console.log(users);
    
            this.setState({
                users: users,
            });
            console.log(this.state);
        }
    }

    onChange = (event, { newValue, method }) => {
        this.setState({ value: newValue });
    }

    // Teach Autosuggest how to calculate suggestions for any given input value.
    getSuggestions = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : this.state.users.filter((user) =>
            user.first_name.toLowerCase().slice(0, inputLength) === inputValue ||
            user.last_name.toLowerCase().slice(0, inputLength) === inputValue ||
            user.email.toLowerCase().slice(0, inputLength) === inputValue
        );
    };


    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
        console.log(this.state);
    };

    onSuggestionsClearRequested = () => {
        this.setState({ suggestions: [] });
    };
    

    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: "Who are you?",
            value,
            onChange: this.onChange
        };
      
        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}