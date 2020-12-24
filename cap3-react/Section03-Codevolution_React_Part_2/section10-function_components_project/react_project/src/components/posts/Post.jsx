import React, { useContext, useRef, useState } from 'react';
import moment from 'moment'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import PostForm from '../forms/PostForm';
import Axios from 'axios'
import { LoggedUserContext } from '../App';
import useErrorHandler from '../hooks/useErrorHandler';
import useLoadSpinner from '../hooks/useLoadSpinner';

const formatDate = (date) => {
   return moment(date).format('DD/MM/YY HH:mm')    
}

const Post = (props) => {
    const {title, author, authorId, date, content, imageUrl, id, refreshPosts} = props

    const [editing, setEditing] = useState(false)
    const [deleting, setDeleting] = useState(false)

    const [loadSpinner] = useLoadSpinner({}, {marginRight: "5px"})
    const [loading, setLoading] = useState(false)

    const {user} = useContext(LoggedUserContext)

    const [setError, setSuccess, errorElement, scrollToError] = useErrorHandler()


    const toggleEditing = () => {
        setEditing(!editing)
    }
    const toggleDeleteConfirmButtons = () => {
        setError('')
        setDeleting(!deleting)
    }

    const postRef = useRef()
    const focusAfterSave = () => {
        postRef.current.scrollIntoView();
    }
    
    const savedPost = () => {
        setEditing(false)
        refreshPosts()
        focusAfterSave()
    }

    const post = {
        title: title, 
        content: content,
        image: imageUrl,
        id: id,
        savedPost: savedPost
    }

    const deletePost = () => {
        setLoading(true)

        Axios.get('http://localhost:8083/auth/cookie', {withCredentials: true})
        .then((token) => {

            return Axios.delete(`http://localhost:8083/posts/${post.id}`, {
                headers: {
                    'Authorization': 'Bearer ' + token.data
                },
                withCredentials: true
            })
        })
        .then(() => {
            setLoading(false)
            refreshPosts()
        })
        .catch(err => {
            setLoading(false)

            if(err.response){
                return setError('Could not delete post. Check your internet connection or try again later.')          
            }

            return setError('Deletion failed. Try again later or contact our support.')
        })
    }

    if(editing){
        return(
            <li key={id} className='post-item'>
                <div className='post-item-controls'>
                    <span>
                        <FontAwesomeIcon icon={faClock} className='dateicon'/>
                        {formatDate(date)}
                    </span>
                    <button 
                        className='post-item-button bg-red' 
                        onClick={toggleEditing}
                    >
                        Cancel
                    </button>
                </div>

                <PostForm post={post}/>
            </li>
        )
    }

    return (  
        <li key={id} className='post-item' ref={postRef}>
            <div className='post-item-controls'>
                <span>
                    <FontAwesomeIcon icon={faClock} className='dateicon'/>
                    {formatDate(date)}
                </span>

                {loading ?
                    loadSpinner:
                    <div className={user.id === authorId ? '' : 'hidden'}>

                        {deleting === true ? 
                            <React.Fragment>
                                <button 
                                    className='post-item-button bg-red'
                                    onClick={deletePost}
                                >
                                    Delete
                                </button>
                                <button 
                                    className='post-item-button bg-blue' 
                                    onClick={toggleDeleteConfirmButtons}
                                >
                                    Cancel
                                </button>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <button 
                                    className='post-item-button bg-blue' 
                                    onClick={toggleEditing} 
                                >
                                    Edit
                                </button>
                                <button 
                                    className='post-item-button bg-red' 
                                    onClick={toggleDeleteConfirmButtons}
                                >
                                    Del
                                </button>
                            </React.Fragment>
                        }
                        
                    </div>
                }
            </div>
            {errorElement}
            <h2 className='post-item-title'>{title}</h2>
            <img src={'http://localhost:8083/' + imageUrl} alt="" width="100px"/>
            <p className='post-item-content'>{content}</p>
            <p className='post-item-author'>Author: {author}</p>
        </li>
    );
}
 
export default Post;