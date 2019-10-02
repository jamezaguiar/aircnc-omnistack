const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv/config");
const routes = require("./routes");
const app = express();

// Use a MongoDB database and replace "process.env.DB_URL" with your database url
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "../uploads")));
app.use(routes);
app.listen(3333);
