import React, { useContext, useRef, useState } from 'react';
import moment from 'moment'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import PostForm from '../forms/PostForm';
import Axios from 'axios'
import { LoggedUserContext } from '../App';

const formatDate = (date) => {
   return moment(date).format('DD/MM/YY HH:mm')    
}

const Post = (props) => {
    const {title, author, authorId, date, content, imageUrl, id, refreshPosts} = props

    const [editing, setEditing] = useState(false)
    const [deleting, setDeleting] = useState(false)

    const {user} = useContext(LoggedUserContext)

    const toggleEditing = () => {
        setEditing(!editing)
    }
    const toggleDeleteConfirmButtons = () => {
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
            refreshPosts()
        })
        .catch(err => {
            console.log(err.response.status)
            console.log(err.response.data)
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
            </div>
            <h2 className='post-item-title'>{title}</h2>
            <img src={'http://localhost:8083/' + imageUrl} alt="" width="100px"/>
            <p className='post-item-content'>{content}</p>
            <p className='post-item-author'>Author: {author}</p>
        </li>
    );
}
 
export default Post;