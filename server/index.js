// require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// const keys = require("./config/keys");
// const passport = require("passport");
// let GoogleStrategy = require("passport-google-oath").OAuth2Strategy;

// const session = require("express-session");

// *******Ignore GoogleAuthO attempt*********/
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: keys.googleClientID,
//       clientSecret: keys.googleClientSecret,
//       callbackURL: "/auth/google/callback"
//     },
//     accessToken => {
//       console.log(accessToken);
//     }
//   )
// );

// app.get(
//   "/auth/google",
//   passport.authenticate("google", {
//     scope: ["profile", "email"]
//   })
// );

const userRoutes = require("./routes/userRoutes");
// const loginRoutes = require("./routes/loginRoutes");

// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//     done(err, user);
//   });
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use(session());
// // Express Session
// app.use(
//   session({
//     secret: "secret",
//     saveUninitialized: true,
//     resave: true
//   })
// );

//********Passport Init**********/
// app.use(passport.initialize());
// app.use(passport.session());
app.use("/users", userRoutes);
// // Endpoint to login
// app.post("/login", passport.authenticate("local"), function(req, res) {
//   res.send(req.user);
// });

// // Endpoint to get current user/loginroutes
// app.get("/user", function(req, res) {
//   res.send(req.user);
// });

// // Endpoint to logout
// app.get("/logout", function(req, res) {
//   req.logout();
//   res.send(null);
// });

app.use(express.static("public"));

mongoose.connect(
  "mongodb+srv://alaynapuck28:horseshoe2@cluster0-3umzc.mongodb.net/runningapp",
  { useNewUrlParser: true }
);

// var LocalStrategy = require("passport-local").Strategy;
// passport.use(
//   new LocalStrategy(function(username, password, done) {
//     User.getUserByUsername(username, function(err, user) {
//       if (err) throw err;
//       if (!user) {
//         return done(null, false, { message: "Unknown User" });
//       }
//       User.comparePassword(password, user.password, function(err, isMatch) {
//         if (err) throw err;
//         if (isMatch) {
//           return done(null, user);
//         } else {
//           return done(null, false, { message: "Invalid password" });
//         }
//       });
//     });
//   })
// );

// app.use("/users", userRoutes);

// mongoose.set("debug", true);
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost/runningapp");

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
