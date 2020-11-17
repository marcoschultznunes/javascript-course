/*
    Real application use a public folder which contains the CSS, JS and the index.html files,
which do not contain sensitive information and they can directly access. We'll make a 
style.css file for the whole application and place it on public/css

The style.css file:

form > input{
    font-size: 20px;
    padding: 4px;
    margin-bottom: 4px;
}
form > input:focus{
    outline-color: rgba(30, 200, 220, 0.4);
}
form > .create-button{
    background-color: darkcyan;
    padding: 8px 16px;
    font-size: 20px;
    border: 2px solid black;
    border-radius: 10px;
    margin-top: 4px;
}
form > button:hover {
    cursor: pointer;
}
form > button:active{
    background-color: rgb(5, 185, 185);
}

.red-text{
    color: red;
}

*/

/*
    Then we'll add a middleware to use that folder as a static folder, which the HTML files
can gather resources from.
*/

/* in app.js */
app.use(express.static(
    path.join(__dirname, 'public') // This gives the user access to the public folder
))


/*
    Then we just need to link the CSS in the desired HTML files:

    <link rel="stylesheet" href="/css/style.css"> => accesses directly the public folder, 
    regardless of the html file location
*/

