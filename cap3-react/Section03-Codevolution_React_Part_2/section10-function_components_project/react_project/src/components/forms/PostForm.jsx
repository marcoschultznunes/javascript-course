import React, { useRef } from 'react';
import useInput from '../hooks/useInput';

const PostForm = (props) => {
    const [title, bindTitle] = useInput()
    const [content, bindContent] = useInput()
    const [imageUrl, bindImageUrl] = useInput()
    
    const imageButtonRef = useRef()

    const focusImageButton = () => {
        imageButtonRef.current.click()
    }

    const submitForm = (e) => {
        e.preventDefault()

        const postData = {
            title: title,
            content: content
        }

        console.log(postData)
    }

    return (  
        <div>
            <form onSubmit={submitForm} className='form'>
                <label htmlFor="title" className='label'>Title:</label>
                <input type="text" name="title" placeholder="Title" {...bindTitle} />

                {/* TODO: Image Upload => Need tutorial for React. */}
                <img src={imageUrl} alt="" width="100px"/>

                <label htmlFor="image" className='label'>Image:</label>
                <input 
                    type="text" 
                    readOnly 
                    placeholder='Image' 
                    onClick={focusImageButton}
                    value={imageUrl ? imageUrl.split(/(\\|\/)/g).pop() : ''}
                />
                <label className='image-input-button bg-blue' ref={imageButtonRef}>
                    Upload Image
                    <input 
                        type="file" 
                        name="image" 
                        className="image-input" 
                        accept='.png, .jpg, .jpeg'
                        {...bindImageUrl}
                    />
                </label>

                <textarea name="content" placeholder="Content" {...bindContent} rows='16'/>
                
                <button type="submit" className="bg-green submit-button">Save</button>
            </form>
        </div>
    );
}
 
export default PostForm;