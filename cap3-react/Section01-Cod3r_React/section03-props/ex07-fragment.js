/*
    To have multiple tags in our JSX we must wrap them with a div or some other tag. But,
    we can also use a tag called React.Fragment, which we use when we don't want to have a 
    div, or any other wrapper tag.
*/
import React from 'react'

export default () => 
    <React.Fragment>
        <h2>Chapter V - Requiem</h2> {/* The content will not be wrapped in a tag */}
        <p>And so, the requiem begun.</p>
    </React.Fragment>
    
/*
    We can also use empty tags for the same purpose, but they will not accept any attributes

    <>
        <h2>Chapter V - Requiem</h2>
        <p>And so, the requiem begun.</p>
    </>
*/