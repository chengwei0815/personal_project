require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require("path");
const methodOverride = require('method-override');

const session = require('express-session');
const passport = require('passport');
const routes = require('./routes/index');
const app = express();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(morgan('dev'));

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: true,
}));

app.use(passport.initialize());

app.use(passport.session());
app.use(routes);
require('./config/connection');

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
    console.log(
        "MongoDB link: https://cloud.mongodb.com/v2/6451a0803f06257f573ab091#/metrics/replicaSet/645ad0c0b1e52716139951e6/explorer/carolsBookstore/authors/find"
    );
});
