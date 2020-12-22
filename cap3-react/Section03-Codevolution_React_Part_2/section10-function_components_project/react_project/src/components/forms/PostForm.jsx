import Axios from 'axios';
import React, { useContext, useRef } from 'react';
import useFileInput from '../hooks/useFileInput';
import useInput from '../hooks/useInput';

import { PageContext } from '../App';

const PostForm = (props) => {
    const [title, bindTitle] = useInput(props.post ? props.post.title : '')
    const [content, bindContent] = useInput(props.post ? props.post.content : '')
    const [image, bindImage] = useFileInput()

    const imageButtonRef = useRef()

    const focusImageButton = () => {
        imageButtonRef.current.click()
    }

    const {setPage} = useContext(PageContext)

    const submitForm = (e) => {
        e.preventDefault()

        const postData = new FormData()
        postData.append('title', title)
        postData.append('content', content)

        if(image){
            postData.append('image', image)
        }

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
            if(props.post){
                props.post.savedPost()
            } else{
                setPage('Posts')
            }
        })
        .catch(err => {
            if(err.response){
                console.log(err.response.data)
            } else{
                console.log(err)
            }
        })
    }

    return (  
        <div>
            <form onSubmit={submitForm} className='form form-no-bg'>
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
                
                <button type="submit" className="bg-green submit-button">Save</button>
            </form>
        </div>
    );
}
 
export default PostForm;