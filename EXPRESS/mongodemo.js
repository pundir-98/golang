const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/ngdb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  
});

app.post('/api/courses',(req, res)=> {
   

    const course = {
        name: req.body.name 
    };
    courses.push(course);
    res.send(course);

});
const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`this is listen on port ${port}`))