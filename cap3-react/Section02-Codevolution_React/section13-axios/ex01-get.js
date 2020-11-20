/*
    First, we must install axios to the project with
        npm install --save axios

    We'll use JSONPlaceholder, a fake API for testing to fetch and post data.
*/

/* PostListComponent.jsx */
import React, { Component } from 'react';
import axios from 'axios'

class PostListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            posts: [] // posts will be stored in state
        }
    }

    /* The best lifecycle method to fetch data is componentDidMount(), as it is only called
    once during the lifetime of the component*/
    componentDidMount(){

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(posts => {
                this.setState({posts: posts.data})
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() { 
        if(this.state.posts.length > 0){
            let posts = this.state.posts.slice(0, 5) // 5 posts (it's better to limit select)

            posts = posts.map(post => // mapped posts array to div elements
                <div key={post.id}>
                    <h3>Title: {post.title}</h3>
                    <p>Body: {post.body}</p>
                    <br />
                </div>
            )

            return <div>{posts}</div> // rendered the posts array
        }
        else{ // Very important, as it defines what will be rendered before axios fetches
            return <h3>No posts fetched yet</h3>
        }
    }
}
 
export default PostListComponent;