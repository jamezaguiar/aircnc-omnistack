const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const routes = require("./routes");
const app = express();

// Use a MongoDB database and replace "process.env.DB_URL" with your database url
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use(express.json());
app.use(routes);
app.listen(3333);
