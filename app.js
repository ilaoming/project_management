const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");

var pool = mysql.createPool({
  connectionLimit: 100,
  host: "us-cdbr-east-05.cleardb.net",
  user: "b6175f675c62a8",
  password: "d1812fb5",
  database: "heroku_ab3189222e34410",
}); 

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
  };

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(allowCrossDomain)

app.get('/',(req,res) =>{
    res.send(`Wellcome to my API!`)
})

//mysql://bbace32c8d270a:a7dceed3@us-cdbr-east-05.cleardb.net/heroku_39362541af4d62a?reconnect=true