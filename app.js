
// 1
var cors = require('cors')
const express = require('express'),
app = express(),
morgan = require('morgan');

app.use(cors())
// 2
app.use(morgan('dev'));


const response = [
  {method:"GET", path: "/api/v2/metrics/feedbacks"},
  { method: "GET", path: "/api/v2/metrics/badges" },
  { method: "GET", path: "/api/v2/metrics/solicitation" },
  { method: "GET", path: "/api/v2/metrics/free_intervals" },
  { method: "GET", path: "/api/v2/metrics/overview" },
  { method: "GET", path: "/api/v2/metrics/consumed_time_repartition" },

]

response.forEach( responseConfig => {
  app.get(responseConfig.path, function (req, res) {
    const responseFilePath = `./views${responseConfig.path}_view.json`
    const response = require(responseFilePath); 
    res.send(response);
  });

}) 

// 4
app.listen(3005, function () {
   console.log('listening on port 3005!');
});