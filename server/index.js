const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const Controllers=require('./controllers.js');
const port = process.env.SERVER_PORT || 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', port)

function setCORS(response){
  response.header('Access-Control-Allow-Origin', "*");
  response.header('Access-Control-Allow-Methods', 'GET');
  response.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  response.header("Access-Control-Max-Age", "1728000");
}
app.get('/api/orders',function (request, response, next) {
    setCORS(response)
    Controllers.getOrders(response)
})
app.get('/api/carriers',function (request, response, next) {
  setCORS(response)
  Controllers.getCarriers(response)
})

app.listen(port, () => console.log(`CORS-enabled web server Listening on port ${port}`));
