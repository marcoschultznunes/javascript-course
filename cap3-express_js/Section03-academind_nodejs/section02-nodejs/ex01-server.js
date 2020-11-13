/* 
    In nodejs, you can create a server using the http module. This server can be configured,
    and you can pass an app as a parameter. This app contains the routes, with all the 
    requests.
*/
const http = require('http')

const app = (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Node Server</title></head>')
    res.write('<body><h1>This is a Node JS server</h1></body>')
    res.write('</html>')
    res.end() // Sends the response and finishes the request
}

const server = http.createServer(app) 
server.listen(8083) // Server listens on a port

/* 
    Node is heavily event driven. This means that we assign many functions to wating for a 
trigger to be executed, the trigger can be, for instance, a request. 

    Another concept that node uses heavily is callbacks. Since node is asynchronous, we 
often assign classbacks to be called when a certain function happens, the code moves on to 
the next lines, but once the previously mentioned function is done, the callback is 
called.
    The callbacks are handled by node's event loop
*/