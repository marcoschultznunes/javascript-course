/*
    It is common to use an external library (formik) for handling forms in React. But, 
    ignoring them, the idea is to make React control the form instead of the HTML. To do 
    this, we overwrite the input events to modify the state, the state will contain the 
    data of the form.

    We'll also overwrite the submit event, so that React can handle the submit.

    We use HANDLERS
*/

// The UserForm.jsx component
import React, { Component } from 'react';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = { // state = each input name
            name: '',
            surname: '',
            email: '',
            password: ''
        }
    }

    updateInput = (event) => {
        this.setState({
            // event.target.name means it will get the input's name, making it generic.
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        console.log(this.state)
        event.preventDefault() // Prevents page refreshing (the normal HTML behaviour)
    }

    render() { 
        return (  
            // OnSubmit, trigger React function instead of default HTML submit
            <form className="form" onSubmit={this.submitHandler}>
                <input 
                    type="text" 
                    placeholder="Name"
                    name="name" 
                    value={this.state.name}
                    onChange={this.updateInput}
                /> <br />
                <input 
                    type="text" 
                    placeholder="Surname"
                    name="surname"
                    value={this.state.surname}
                    onChange={this.updateInput} 
                /> <br />
                <input 
                    type="email" 
                    placeholder="Email"
                    name="email" 
                    value={this.state.email}
                    onChange={this.updateInput}
                /> <br />
                <input 
                    type="password" 
                    placeholder="Password"
                    name="password" 
                    value={this.state.password}
                    onChange={this.updateInput}
                /> <br /><br />
                <button className="blue-button">Register</button>
            </form>
        );
    }
}
 
export default UserForm;

