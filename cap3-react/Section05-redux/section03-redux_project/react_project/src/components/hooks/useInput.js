import { useState } from "react"

const useInput = (initValue = '') => {
    const [inputValue, setInputValue] = useState(initValue)

    const bind = {
        value: inputValue,
        onChange: (e) => setInputValue(e.target.value) 
    }

    return [inputValue, bind, setInputValue]
}

export default useInput
