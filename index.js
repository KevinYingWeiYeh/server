const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User.js");
require("./services/passport.js");

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
// eslint-disable-next-line no-console
console.log("Server start listening port:" + PORT);
app.listen(PORT);
