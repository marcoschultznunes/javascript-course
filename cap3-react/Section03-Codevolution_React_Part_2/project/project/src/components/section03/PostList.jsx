import React, { useState, useEffect } from 'react';
import Axios from 'axios'

const PostList = () => {

    const [state, setState] = useState({posts: []})

    useEffect(() => {
        Axios.get('http://localhost:8083/posts')
            .then(res => {
                setState({posts: res.data.posts, error: false})
            })
            .catch(() => setState({posts: [], error: true}))
    }, [])

    const mappedPosts = state.posts.map((post) => 
        <li className='unstyled-list' key={post._id}>
            <h3>{post.title}</h3>
            <ul>
                <li>Content: {post.content}</li>
                <li>Creator: {post.creator.name}</li>
                <li>Date: {post.updatedAt}</li>
            </ul>
        </li>
    )

    return (  
        <div>
            <h2>Posts</h2><br/>
            {state.error ? <h3>Could not fetch posts.</h3> : mappedPosts}
        </div>
    );
}
 
export default PostList;