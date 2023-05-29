const mongoose = require('mongoose');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const { Schema } = mongoose;

const mongooseFindOrCreate = require('mongoose-findorcreate');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const userSchema = new Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    googleId: {
        type: String,
    },
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(mongooseFindOrCreate);
const User = mongoose.model('User', userSchema);
passport.use(User.createStrategy());

passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        cb(null, { id: user.id, username: user.username, name: user.displayName });
    });
});
passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user);
    });
});
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/admin'
},
    function (accessToken, refreshToken, email, cb) {
        User.findOrCreate({ googleId: email.id }, function (error, user) {
            return cb(error, user);
        });
    }
));
module.exports = User;
