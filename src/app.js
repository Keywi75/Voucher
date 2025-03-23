const express = require("express");
const app = express();
const cors = require("cors");




//
app.use(morgan('dev'))

//load cac routes /. middlewares
app.use(cors());
app.use(express.json());

module.exports = app ;