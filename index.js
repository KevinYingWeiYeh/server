const express = require("express");
require("./servies/passport");
const authRoutes = require("./rouths/authRoutes ");

const app = express();
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
