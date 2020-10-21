/*
    The React project is structured in two folders: public & src. We'll delete all the files
    from src and create an empty index.js file in the src folder. The file named index.js in 
    the src folder is the js file that react searches by default.
*/

// On the index.js file
import ReactDOM from 'react-dom'

const root = document.getElementById('root') // root is the id of the index.html body
ReactDOM.render('Hello There', root) /* HTML tags will be ignored and considered a string, 
unless if we use jsx */