const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const keys = require('../../config/keys');

// Load input validation
const validateRegisterInput = require('../../validation/register');

// Load user model
const User = require('../../models/User');


router.get('/login', (req, res)=>{
    res.send('loginNOW')
});

router.get('/profile', (req, res)=>{
    res.send('profile')
});

router.get('/register', (req, res)=>{
    res.send('register')
});

//  Register new user. add to db new user. hashing password bcrypto. validation
router.post('/register', (request, response) => {
    const {errors, isValid} = validateRegisterInput(request.body);
    // Chack validation
    if(!isValid){
        return response.status(400).json(errors);
    }
    User.findOne({username: request.body.email})
        .then(user => {
            if(user) {
                errors.email = "Email already exists";
                response.status(400).json({errors})
            }else {
                const newUser = new User({
                    password: request.body.password,
                    username: request.body.email
                })
                // password hash use bcrypt
                bcrypt.genSalt(10, (err,salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash)=>{
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => response.json(user))
                            .catch(err => console.log(err))
                        })
                })
            }
        })
});


router.post('/login',
  passport.authenticate('local', { successRedirect: '/api/users/profile',
                                   failureRedirect: '/api/users/register',
                                   failureFlash: false }),(req,res)=>{
                                       res.send('hey');
                                   }
);


module.exports = router;