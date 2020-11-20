import React, { Component } from 'react';
import axios from 'axios'

class PostListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            posts: []
        }
    }

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
            let posts = this.state.posts.slice(0, 5)

            posts = posts.map(post => 
                <div key={post.id}>
                    <h3>Title: {post.title}</h3>
                    <p>Body: {post.body}</p>
                    <br />
                </div>
            )

            return <div>{posts}</div>
        }
        else{
            return <h3>No posts fetched yet</h3>
        }
    }
}
 
export default PostListComponent;