import React from 'react';
import moment from 'moment'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClock} from '@fortawesome/free-solid-svg-icons'

const formatDate = (date) => {
   return moment(date).format('DD/MM/YY HH:mm')    
}

const Post = (props) => {
    const {title, author, date, content, imageUrl, id} = props
    return (  
        <li key={id} className='post-item'>
            <div className='post-item-controls'>
                <span>
                    <FontAwesomeIcon icon={faClock} className='dateicon'/>
                    {formatDate(date)}
                </span>
                <button className='post-item-edit-button bg-blue'>Edit</button>
            </div>
            <h2 className='post-item-title'>{title}</h2>
            <img src={'http://localhost:8083/' + imageUrl} alt="" width="100px"/>
            <p className='post-item-content'>{content}</p>
            <p className='post-item-author'>Author: {author}</p>
        </li>
    );
}
 
export default Post;