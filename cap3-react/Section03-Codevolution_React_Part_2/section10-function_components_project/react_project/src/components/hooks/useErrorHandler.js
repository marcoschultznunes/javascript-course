import { useRef, useState } from "react"

const useErrorHandler = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const errorElementRef = useRef()

    let errorElement = 
    <h3 className= {error ? 'error-block message-block' : 'hidden'} ref={errorElementRef}>
        {error}
    </h3>

    const scrollToError = () => {
        setTimeout(() => {
            errorElementRef.current.scrollIntoView()
            window.scrollBy(0, -10);
        }, 100)
    }

    if(!error && success){
        errorElement = 
        <h3 className= 'success-block message-block'>
            {success}
        </h3>
    }

    return [setError, setSuccess , errorElement, scrollToError]
}

export default useErrorHandler