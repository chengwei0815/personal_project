// Require the dependency express
const express = require('express');

// Require the dependency morgan
const morgan = require('morgan');

// Create a const variable called app with the value of express()
const app = express();

// Create a const variable called port with the value of 3000
const PORT = 3000;

// Use morgan as a middleware for this project
app.use(morgan('combined'));

// Require the path module
const path = require('path');

// Use the Path module to point Node.js to the public directory that contains all of assets (images, scripts.js, and styles.js) for the project
app.use(express.static(path.join(__dirname, 'public')));

// Configure Node.js to use EJS as its views engine
app.set('view engine', 'ejs');

//Update all 5 GET routes handlers to new render EJS files as the response from the server

//Routes

app.get('/', (req, res) => {
    res.render('pages/index');
});
app.get('/about', (req, res) => {
    res.render('pages/about');
});
app.get('/course', (req, res) => {
    res.render('pages/course');
});
app.get('/community', (req, res) => {
    res.render('pages/community');
});
app.get('/contact', (req, res) => {
    res.render('pages/contact');
});
app.get('/camp', (req, res) => {
    res.render('pages/camp');
});
app.get('/teacher', (req, res) => {
    res.render('pages/teacher');
});
app.get('/abroad', (req, res) => {
    res.render('pages/abroad');
});
app.get('/conference', (req, res) => {
    res.render('pages/conference');
});
app.get('/portland', (req, res) => {
    res.render('pages/portland');
});

app.get('/login', (req, res) => {
    res.render('pages/login');
});
app.get('/admin-console', (req, res) => {
    res.render('pages/admin');
});
app.get('/admin-console/create-course', (req, res) => {
    res.render('pages/create-course');
});

// PATH: /course-detail/:id, HANDLER: render a file called course-detail that will show the courses details page
app.get('/course-detail/:id'), (req, res) => {
    res.render('pages/book-detail');
};

// PATH: /admin-console/update-course/:id, HANDLER: render the update course form page
app.get('/admin-console/update-course/:id', (req, res) => {
    res.render('pages/update-book');
});

// Use app.listen() to start the server and send a console.log to the terminal with the localhost URL

// Server
app.listen(PORT, () => {
    console.log(`The server is listening on port $(PORT}`);
});
