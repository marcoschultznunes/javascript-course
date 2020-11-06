import React, { Component } from 'react';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            surname: '',
            email: '',
            password: ''
        }
    }

    updateInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        console.log(this.state)
        event.preventDefault()
    }

    render() { 
        return (  
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