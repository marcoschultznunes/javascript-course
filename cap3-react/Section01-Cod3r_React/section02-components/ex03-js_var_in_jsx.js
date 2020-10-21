/*
    We declare the variable just like in javascript, then we enclose the variable with {} to
    call it in the JSX HTML
*/
import React from 'react'

const message = 'Hi'

export default () => {return(
    <div>
        <b>{message}</b> {/* Comments in JSX */}
    </div>
)}