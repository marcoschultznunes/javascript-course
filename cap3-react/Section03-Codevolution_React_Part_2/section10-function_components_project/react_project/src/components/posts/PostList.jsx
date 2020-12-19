import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Post from './Post'

const PostList = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8083/posts?perPage=10')
            .then(posts => {
                setPosts(posts.data.posts)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                setError(true)
            })
    }, [])

    if(loading){
        return (
            <h3 className='fetch-message'>Loading Posts...</h3>
        )
    }
    if(error){
        return (
            <h3 className='error-message'>Failed to fetch posts.</h3>
        )
    }

    const mappedPosts = posts.map(post => 
        <Post title={post.title} date={post.createdAt} author={post.creator.name} 
            content={post.content} imageUrl={post.imageUrl} id={post._id}
        />    
    )

    return (  
        <div id='post-list-container'>
            <ul id='post-list'>
                {mappedPosts}
            </ul>
        </div>
    );
}
 
export default PostList;