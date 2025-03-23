const express = require("express");
const app = express();
const cors = require("cors");







//load cac routes /. middlewares
app.use(cors());
app.use(express.json());

module.exports = app ;