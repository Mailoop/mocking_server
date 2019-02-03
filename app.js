import {feedbacks} from './responses/api/V2/responses.js'

// 1
var cors = require('cors')
const express = require('express'),
app = express(),
morgan = require('morgan');

app.use(cors())
// 2
app.use(morgan('dev'));

app.options('/*', function(req, res) {

}
)
// 3
app.get('/*', function (req, res) {
  res.send({coucou: "random"});
});
// 3
app.post('/*', function (req, res) {
  res.send({ coucou: "random" });
});

app.options('/*', function (req, res) {

}
)

// 4
app.listen(3005, function () {
   console.log('listening on port 3005!');
});