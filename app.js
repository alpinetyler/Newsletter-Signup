const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const PORT = 3003;


const app = express();





app.listen(PORT, function(){
  console.log(`The Server is running on port ${PORT}`)
})
