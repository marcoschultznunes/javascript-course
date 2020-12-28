import Axios from 'axios';
import React, { useContext, useRef, useState } from 'react';
import useFileInput from '../hooks/useFileInput';
import useInput from '../hooks/useInput';

import { PageContext } from '../App';
import useErrorHandler from '../hooks/useErrorHandler';
import useLoadSpinner from '../hooks/useLoadSpinner';

const PostForm = (props) => {
    const [title, bindTitle] = useInput(props.post ? props.post.title : '')
    const [content, bindContent] = useInput(props.post ? props.post.content : '')
    const [image, bindImage] = useFileInput()

    const [setError, setSuccess, errorElement, scrollToError] = useErrorHandler()

    const imageButtonRef = useRef()
    const focusImageButton = () => {
        imageButtonRef.current.click()
    }

    const {setPage} = useContext(PageContext)

    const [loading, setLoading] = useState(false)
    const [loadSpinner] = useLoadSpinner({height: "30px", width: "30px", marginTop: "5px"})

    const submitForm = (e) => {
        e.preventDefault()

        const sanitizedTitle = title.trim()
        const sanitizedContent = content.trim()

        if(sanitizedTitle.length < 2 || sanitizedTitle.length > 150){
            setError('Title must contain 2-150 characters.')
            return scrollToError()
        }
        if(sanitizedContent.length < 2 || sanitizedContent.length > 3000){
            setError('Content must contain 2-3000 characters.')
            return scrollToError()
        }
        if(!image){
            setError('You must upload an image for the post.')
            return scrollToError()
        }

        const postData = new FormData()
        postData.append('title', sanitizedTitle)
        postData.append('content', sanitizedContent)

        if(image){
            postData.append('image', image)
        }

        setLoading(true)

        // WITH CREDENTIALS AQUI TAMBÉM PUTA QUE PARIU
        Axios.get('http://localhost:8083/auth/cookie', {withCredentials: true})
        .then((token) => {
            if(props.post){
                return Axios.patch(`http://localhost:8083/posts/${props.post.id}`, postData, {
                    headers: {
                        'Authorization': 'Bearer ' + token.data,
                        'Content-Type': 'multipart/form-data'
                    },
                    withCredentials: true
                })
            }

            return Axios.post('http://localhost:8083/posts', postData, {
                headers: {
                    'Authorization': 'Bearer ' + token.data,
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            })
        })
        .then(res => {
            setLoading(false)

            if(props.post){
                props.savedPost(res.data.post)
            } else{
                setPage('My Posts')
            }
        })
        .catch(err => {
            setLoading(false)

            if(err.response){
                if(err.response.status === 422) {
                    if(err.response.data.errors){
                        setError(err.response.data.errors[0].msg)
                        return scrollToError()
                    }
                    
                    setError(err.response.data.message)
                    return scrollToError()
                }
                if(err.response.status === 404){
                    setError('Server did not respond. Please, try again later.')
                    return scrollToError()
                }
            } else{
                setError('An error has ocurred. Please, try again later.')
                return scrollToError()
            }
        })
    }

    return (  
        <div>
            <form onSubmit={submitForm} className='form form-no-bg'>
                {errorElement}

                <label htmlFor="title" className='label'>Title:</label>
                <input type="text" name="title" placeholder="Title" {...bindTitle} />

                {/* TODO: Image Upload => Need tutorial for React. */}
                <img src={image ? URL.createObjectURL(image) : ''} alt="" width="100px"
                    style={image ? {marginBottom: '10px'} : {}}
                />

                <label htmlFor="image" className='label'>Image:</label>
                <input 
                    type="text" 
                    readOnly 
                    placeholder='Image' 
                    onClick={focusImageButton}
                    value={image ? image.name : ''}
                />
                <label className='image-input-button bg-blue' ref={imageButtonRef}>
                    Upload Image
                    <input 
                        type="file" 
                        name="image" 
                        className="image-input" 
                        accept='.png, .jpg, .jpeg'
                        {...bindImage}
                    />
                </label>

                <textarea name="content" placeholder="Content" {...bindContent} rows='16'/>
                
                {loading ?
                    loadSpinner :
                    <button type="submit" className="bg-green submit-button">Save</button>
                }
            </form>
        </div>
    );
}
 
export default PostForm;