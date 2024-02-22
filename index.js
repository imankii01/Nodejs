const http = require('http');
const express = require('express');
const data = require('./data');
const app=express();

// http.createServer((req, resp) => {
//     resp.writeHead(200, { 'Content-Type': 'application\json' });
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(7000)


app.get('',(req,resp)=>{
    resp.send("<h1>Home page....</h1>")
})
app.get('/about',(req,resp)=>{
    resp.send("<h1>About page....</h1>")
})
app.get('/login',(req,resp)=>{
    resp.send("<h1>login page....</h1>")
})
app.get('/contact',(req,resp)=>{
    resp.send("<h1>Contact page....</h1>")
})
app.listen(7000)