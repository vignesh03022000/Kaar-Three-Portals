var request=require('request');
var pareString =require('xml2js').parseString;
const express=require("express");
const cors=require('cors');
const app=express();
 const bodyParser =require('body-parser');
 var request = require('request');


app.use(cors());
app.use(bodyParser.json())


app.listen(3000,()=>
{
    console.log("Express rening");
});




var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/customer/edit',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'JSESSIONID=iYGe7sUPjfN2pu5kB3QUTYNWLS2XeQF-Y2kA_SAP_RBUHzPP-EEPg4bfqwgemsm9; JSESSIONMARKID=BZeZMQHNhs7nlQimMemygKeN7O0PSunP4qIH5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: JSON.stringify({
    "USERNAME": "2",
    "STREET" :"bharathi "
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
