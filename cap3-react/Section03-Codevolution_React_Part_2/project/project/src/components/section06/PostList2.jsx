import React, {useEffect, useReducer} from 'react';
import axios from 'axios'

const initState = {
    posts: [],
    loading: true,
    error: false
}
const reducer = (state, action) => {
    switch(action.result){
        case 'FETCH_SUCCESS': return {posts: action.posts, loading: false, error: false}
        case 'FETCH_ERROR': return {posts: [], loading: false, error: true}
        default: return state
    }
}

const PostList = () => {
    const [state, dispatch] = useReducer(reducer, initState)

    useEffect(() => {
        axios.get('http://localhost:8083/posts')
        .then(posts => {
            dispatch({
                result: 'FETCH_SUCCESS',
                posts: posts.data.posts
            })
        })
        .catch(error => {
            if(error){
                dispatch({
                    result: 'FETCH_ERROR',
                    posts: []
                })
            }
        })
    }, [])

    let mappedPosts = <h3>Fetching posts...</h3>

    if(!state.loading){
        mappedPosts = state.posts.map(post => 
            <li className='unstyled-list'>
                <h3>{post.title}</h3>
                <ul>
                    <li>Content: {post.content}</li>
                    <li>Image: <br/>
                        <img src={'http://localhost:8083/' + post.imageUrl} width='560' height="315"
                            alt=""
                        />
                    </li>
                    <li>Creator: {post.creator}</li>
                </ul>
            </li>
        )
    }
    if(state.error){
        mappedPosts = <h3>Could not fetch posts.</h3>
    }

    return (  
        <div>
            <ul>
                {mappedPosts}
            </ul>
        </div>
    );
}
 
export default PostList;