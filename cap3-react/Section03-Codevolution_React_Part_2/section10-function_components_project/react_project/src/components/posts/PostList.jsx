import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import Post from './Post'
import { LoggedUserContext } from '../App';
import useLoadSpinner from '../hooks/useLoadSpinner';

const PostList = (props) => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const [loadSpinnerIcon] = useLoadSpinner({}, {display: 'inline-block', width: "fit-content"})

    const {user} = useContext(LoggedUserContext)

    const userQuery = props.filterUser ? `&userId=${user.id}` : ''  

    const fetchPosts = () => {
        axios.get('http://localhost:8083/posts?perPage=10' + userQuery)
            .then(posts => {
                setPosts(posts.data.posts)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                setError(true)
            })
    }

    useEffect(() => {
        fetchPosts()
    }, [props])

    if(loading){
        return (
            <h3 className='fetch-message'>Loading Posts... {loadSpinnerIcon}</h3>
        )
    }
    if(error){
        return (
            <h3 className='error-message'>Failed to fetch posts.</h3>
        )
    }

    const mappedPosts = posts.map(post => 
        <Post 
            id={post._id} title={post.title} date={post.createdAt} 
            author={post.creator.name} authorId={post.creator._id}
            content={post.content} imageUrl={post.imageUrl} 
            refreshPosts={fetchPosts}
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