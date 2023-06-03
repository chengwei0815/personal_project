const User = require('../models/userModel');
const siteData = require("../data/siteData");
const passport = require('passport');

module.exports = {
  index: (request, response) => {
    response.render("pages/index", {
      name: siteData.userName,
      copyrightYear: siteData.year,
      signedIn: siteData.signedIn,
    });
  },
  register_get: (request, response) => {
    response.render("pages/register", {
      copyrightYear: siteData.year,
    });
  },
  register_post: (request, response) => {
    User.register(
      { username: request.body.username },
      request.body.password,
      (error, user) => {
        if (error) {
          console.log(error);
          response.redirect("/register");
        } else {
          passport.authenticate("local")(request, response, () => {
            response.redirect("/login");
          });
        }
      }
    );
  },
  login_get: (request, response) => {
    response.render("pages/login", {
      copyrightYear: siteData.year,
    });
  },
  login_post: (request, response) => {
    const { username, password } = request.body;
    const user = new User({
      username: username,
      password: password,
    });
    request.login(user, (error) => {
      if (error) {
        console.log(error);
        response.redirect("/login");
      } else {
        passport.authenticate("local")(request, response, () => {
          response.redirect("/admin");
        });
      }
    });
  },
  logout: (request, response) => {
    // new code as of 6/2022 - the correct logout function
    request.logout(function (err) {
      // destroy the session for the user
      if (err) {
        return next(err);
      }
      // redirect back to the homepage
      response.redirect("/");
    });
  },
  google_get: passport.authenticate("google", {
    scope: ["openid", "profile", "email"],
  }),
  google_redirect_get: [
    passport.authenticate("google", { failureRedirect: "/login" }),
    function (request, response) {
      response.redirect("/admin");
    },
  ],
};
