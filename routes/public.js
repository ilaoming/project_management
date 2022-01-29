const express = require('express');
const router = express.Router();
const mysql = require('mysql');

var pool = mysql.createPool({
  connectionLimit: 20,
  host: 'us-cdbr-east-05.cleardb.net',
  user: 'bbace32c8d270a',
  password: 'a7dceed3',
  database: 'heroku_39362541af4d62a',
});

//Route
app.get('/',(req,res) =>{
    res.send(`Wellcome to my API!`)
})
//mysql://bbace32c8d270a:a7dceed3@us-cdbr-east-05.cleardb.net/heroku_39362541af4d62a?reconnect=true

module.exports = router