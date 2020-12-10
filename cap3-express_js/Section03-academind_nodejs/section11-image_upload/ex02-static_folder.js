/*
    To access an image, we'll make the folder static, this way the image can be accessed by 
searching the api url + the imageUrl saved. 
*/

/* On app.js */
const path = require('path')

app.use('/app/images', express.static(path.join(__dirname, 'images')))

/*
    We use /app/images to match the imageUrl, since we used the app folder to separate the 
package.json files and node_modules from the actual app.
*/
