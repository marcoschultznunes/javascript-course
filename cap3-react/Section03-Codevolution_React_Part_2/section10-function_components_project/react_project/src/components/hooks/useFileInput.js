import { useState } from "react"

const useFileInput = () => {
    const [fileInputValue, setFileInputValue] = useState()

    const bind = {
        onChange: (e) => setFileInputValue(e.target.files[0]) 
    }

    return [fileInputValue, bind]
}

export default useFileInput