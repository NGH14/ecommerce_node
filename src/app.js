const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
// require("./databases/init.mongodb")

const app = express();

app.use(morgan("combine"))
app.use(helmet())
app.use(compression())



app.get("/", (req,res,next) =>{
  let data = "lorem"
  return res.status(200).json({msg: "Hi", metadata: data.repeat(100000)})
})

module.exports = app;