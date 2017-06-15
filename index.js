var express = require('express');
var app = express()
 
// folder public 
app.use(express.static("public"));
// set view engine is EJS
app.set("view engine","ejs");
// set folder views
app.set("views","./views");

// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage')
});
// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

app.listen(3000);