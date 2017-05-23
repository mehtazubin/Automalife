var express = require('express'),
  app = express(),
  port = process.env.PORT || 4200,
  mongoose = require('mongoose'),
  User = require('./api/models/user'),
  Program = require('./api/models/program'),
  bodyParser = require('body-parser');
  cors = require('cors');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/sampledb'); 

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/route');
routes(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
