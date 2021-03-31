import React, { Component } from 'react';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            name: '',
            surname: '',
            email: '',
            date_of_birth: '',
            
        }
    }

    changeHandler = (e) => {
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render() { 
        return (  
            <form action="" onSubmit={this.submitHandler} id="register_form">
                <input 
                    type="text" name="name" placeholder="Name" onChange={this.changeHandler}
                />
                <input 
                    type="text" name="surname" placeholder="Surname" onChange={this.changeHandler}
                />
                <input 
                    type="email" name="email" placeholder="Email" onChange={this.changeHandler}
                />
                <input 
                    type="date" name="date_of_birth" onChange={this.changeHandler}
                />
                <button type="submit">Sign Up</button>
            </form>
        );
    }
}
 
export default RegistrationForm;