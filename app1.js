const express = require('express')
const app = express()
const url = require('url')

app.post('/login', (req, res) => {
var operation= req.body.operation;
var path = `http://localhost:6000/${operation}`
res.redirect(url.format({
    pathname: path,
    query: {
       "value": operation,
       "name": name
     }
  }));
})


app.listen(7000, () => console.log("Server started"))