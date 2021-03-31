import React, { Component } from 'react';
import Axios from 'axios';

class AxiosGet extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            loading: true,
            posts: [],
            error: ''
        }
    }

    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({loading: false, posts: res.data})
            })
            .then(() => {console.log(this.state)})
            .catch(err => {
                this.setState({loading: false, error: err.message})
            })
    }

    mapPosts = post => <li key={post.id}>
        {post.title}
    </li>

    render() { 
        if(this.state.loading){return <h3>Loading...</h3>}
        if(this.state.error){return <h2>{this.state.error}</h2>}
        return (  
            <div>
                <ul>
                    {this.state.posts.map(this.mapPosts)}
                </ul>
            </div>
        );
    }
}
 
export default AxiosGet;
