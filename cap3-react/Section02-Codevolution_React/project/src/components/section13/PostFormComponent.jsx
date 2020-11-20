import React, { Component } from 'react';
import axios from 'axios';

class PostFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() { 
        return (  
            <form className="form" onSubmit={this.submitHandler}>

                <input type="text" placeholder="User Id" name="userId" 
                    onChange={this.changeHandler} value={this.state.userId}/>
                <input type="text" placeholder="Title" name="title" 
                    onChange={this.changeHandler} value={this.state.title}/>
                <input type="text" placeholder="Body" name="body" 
                    onChange={this.changeHandler} value={this.state.body}/><br />

                <button className="green-button">Submit</button>
            </form>
        );
    }
}
 
export default PostFormComponent;