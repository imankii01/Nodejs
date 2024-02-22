const http = require('http');


const dataControl = (req, resp) => {

    resp.write("<h1>hello world</h1>")
    resp.end()
}

http.createServer(dataControl).listen(5000)





// http.createServer((req, resp) => {
//     resp.write("<h1>Hello this is nodemon</h1>")
//     resp.end()
// }).listen(5000)

