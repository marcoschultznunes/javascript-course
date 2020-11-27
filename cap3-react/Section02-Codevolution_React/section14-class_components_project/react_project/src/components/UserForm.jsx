import React, { Component } from 'react';
import { makeIdInput, submitForm, updateStateFromInput } from '../utils/formFunctions';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            name: this.props.item.name || '',
            surname: this.props.item.surname || '',
            role: this.props.item.role || '',
            password: this.props.item.password || ''
        }
    }

    updateInput = (e) => {
        updateStateFromInput(e, this)
    }

    onSubmit = (e) => {
        e.preventDefault()
        
        submitForm('users', this)
    }

    render() {
        const idDisplay = makeIdInput(this)
        
        return (
            <React.Fragment>
                <header className='index-header'>
                    <h1>User Form</h1>
                </header>
                <form action="" className='new-form'>
                    {idDisplay}
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" name="name" onChange={this.updateInput} 
                        value={this.state.name} placeholder="Name"
                    />
                    <label htmlFor="surname">Surname</label>
                    <input 
                        type="text" name="surname" onChange={this.updateInput} 
                        value={this.state.surname} placeholder="Surname"
                    />
                    <label htmlFor="role">Role</label>
                    <input 
                        type="text" name="role" onChange={this.updateInput} 
                        value={this.state.role} placeholder="Role"
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" name="password" onChange={this.updateInput} 
                        value={this.state.password} placeholder="Password"
                    />

                    <button type="submit" onClick={this.onSubmit}>Save User</button>
                </form>
            </React.Fragment>
        );
    }
}
 
export default UserForm;