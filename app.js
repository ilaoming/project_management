const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var pool = mysql.createPool({
    connectionLimit: 20,
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'bbace32c8d270a',
    password: 'a7dceed3',
    database: 'heroku_39362541af4d62a',
  });
  

//Settings
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

  //Route
  app.get('/',(req,res) =>{
    res.send(`Wellcome to my API!`)
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log("server start");
});