import React, { useState } from 'react';
import PostForm from './forms/PostForm';
import Navbar from './navbar/Navbar';
import PostList from './posts/PostList';

export const PageContext = React.createContext()
const PageProvider = PageContext.Provider

const App = () => {
    const [page, setPage] = useState('New Post')
    let pageHtml = <React.Fragment />

    switch(page){
        case 'Posts': pageHtml = <PostList />
        break
        case 'My Posts': pageHtml = <h1>My Posts</h1>
        break
        case 'New Post': pageHtml = <PostForm />
        break
        case 'Logout': pageHtml = <h1>Login</h1>
        break
        case 'Signup': pageHtml = <h1>Signup</h1>
        break
    }

    return (  
        <PageProvider value={{page: page, setPage: setPage}}>
            <React.Fragment>
                <Navbar />
                {pageHtml}
            </React.Fragment>
        </PageProvider>
    );
}

export default App;
