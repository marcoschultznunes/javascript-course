import React, { useState } from 'react';
import LoginForm from './forms/LoginForm';
import PostForm from './forms/PostForm';
import Navbar from './navbar/Navbar';
import PostList from './posts/PostList';

export const PageContext = React.createContext()
const PageProvider = PageContext.Provider

export const LoggedUserContext = React.createContext()
const LoggedUserProvider = LoggedUserContext.Provider

const App = () => {
    const [page, setPage] = useState('Logout')
    const [loggedUser, setLoggedUser] = useState(false)

    let pageHtml = <React.Fragment />
    switch(page){
        case 'Posts': pageHtml = <PostList />
        break
        case 'My Posts': pageHtml = <h1>My Posts</h1>
        break
        case 'New Post': pageHtml = <PostForm />
        break
        case 'Logout': pageHtml = <LoginForm />
        break
        case 'Sign Up': pageHtml = <h1>Signup</h1>
        break
        case 'Login': pageHtml = <LoginForm />
        break
        default: 
        break
    }

    return (  
        <LoggedUserProvider value={{user: loggedUser, setUser: setLoggedUser}}>
            <PageProvider value={{page: page, setPage: setPage}}>
                <React.Fragment>
                    <Navbar />
                    {pageHtml}
                </React.Fragment>
            </PageProvider>
        </LoggedUserProvider>
        
    );
}

export default App;
