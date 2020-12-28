import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import Post from './Post'
import { LoggedUserContext } from '../App';
import useLoadSpinner from '../hooks/useLoadSpinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const PostList = (props) => {
    const [posts, setPosts] = useState([])
    const [postPage, setPostPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [loadingScroll, setLoadingScroll] = useState(false)
    const [error, setError] = useState(false)

    const [loadSpinnerIcon] = useLoadSpinner({}, {display: 'inline-block', width: "fit-content"})
    const [loadScrollSpinnerIcon] = useLoadSpinner({heigth: '30px', width: '30px'})

    const {user} = useContext(LoggedUserContext)

    const userQuery = props.filterUser ? `&userId=${user.id}` : ''  

    const fetchPosts = () => {
        axios.get('http://localhost:8083/posts?perPage=2' + userQuery)
            .then(posts => {
                setPosts(posts.data.posts)
                console.log(posts.data.posts)
                setPostPage(2)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                setError(true)
            })
    }

    const scrollFetchPosts = () => {
        setLoadingScroll(true)

        axios.get('http://localhost:8083/posts?perPage=2&page=' + postPage + userQuery)
            .then(posts => {
                setPostPage((prevPostPage) => prevPostPage + 1)
                setPosts((prevPosts) => prevPosts.concat(posts.data.posts))
                setLoadingScroll(false)
            })
            .catch(err => {

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

    const mappedPosts = posts.map(post =>{
        return (<Post 
            id={post._id} title={post.title} date={post.createdAt} 
            author={post.creator.name} authorId={post.creator._id}
            content={post.content} imageUrl={post.imageUrl} 
            refreshPosts={fetchPosts}
        /> 
        )  } 
    )

    return ( 
        <InfiniteScroll
            dataLength={posts.length}
            next={scrollFetchPosts}
            hasMore={true}
            loader= {
                <div className='scroll-loading-div'>
                {
                    loadingScroll && loadScrollSpinnerIcon
                }
                </div>
            }
        >
            <div id='post-list-container'>
                <ul id='post-list'>
                    {mappedPosts}
                </ul>
            </div>
        </InfiniteScroll>
        
    );
}
 
export default PostList;