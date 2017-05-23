var express = require('express'),
  app = express(),
  port = process.env.PORT || 4200,
  mongoose = require('mongoose'),
  Task = require('./api/models/model'),
  bodyParser = require('body-parser');
  cors = require('cors');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/sampledb'); 

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

var routes = require('./api/routes/route');
routes(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
