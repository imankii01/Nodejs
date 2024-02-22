const express = require('express');
const app = express();

app.get('/:name', (req, resp) => {
    resp.send(req?.params)
    resp.send("<h1>Home page....</h1>");
});

app.get('/about', (req, resp) => {
    resp.send("<h1>About page....</h1>");
});

app.get('/login', (req, resp) => {
    resp.send("<h1>Login page....</h1>");
});

app.get('/contact', (req, resp) => {
    resp.send("<h1>Contact page....</h1>");
});

// Example route with a parameter
app.get('/user/:name', (req, resp) => {
    console.log(req.params.name);
    resp.send(`<h1>Hello, ${req.params.name}!</h1>`);
});

app.listen(7000, () => {
    console.log('Server is running on port 7000');
});
