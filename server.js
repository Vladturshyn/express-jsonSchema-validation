const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require("express-session");
const passport = require('passport');


const users = require('./routes/api/users');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// BD config
const db = require('./config/keys').mongoURI;

// Connect to MongoBD
mongoose
    .connect(db,{ useNewUrlParser: true })
    .then(()=>{console.log('connected succsess')})
    .catch(()=>{console.log('erorr')});

// Use routes
app.use('/api/users', users);

const port = process.env.PORT || 8000;

app.listen(port, console.log(`Server running on port ${port}`));