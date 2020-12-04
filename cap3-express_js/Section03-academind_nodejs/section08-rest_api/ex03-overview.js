/*
    The post should have the following fields, as seen by the feed.js file on the frontend

    Post
    _id, title, imageUrl, content, creator: User(_id, name), createdAt: Date

    User
    _id, name, email, password

    We'll:
        1 - Create the post model (with dummy user field);
        2 - Create POST post endpoint (dummy image);
        3 - Implement validation with express validator on the POST post endpoint;
        4 - Add error handling as the final middleware of the app;
        5 - Add uploading post image with multer
        6 - ...
 
    Learning all of this should:
        - Teach me to use promises instead of callbacks so that my code is not unreadable 
        because of all the nesting anymore;
        - Teach me to use express validator;
        - Teach me to properly handle errors;
        - Teach me to make a relation between 2 documents, the post and the user document.      
*/