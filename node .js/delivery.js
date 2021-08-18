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


app.post('/delivery',(req,res)=>
{
  var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/delivery',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA1wb3J0YWw6UE9VU0VSiAAHZGVmYXVsdAEABlBPVVNFUgIAAzAwMAMAA0tQTwQADDIwMjEwNTIyMDM1OAUABAAAAAgKAAZQT1VTRVL%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjEwNTIyMDM1ODA2WjAjBgkqhkiG9w0BCQQxFgQU57JXKIm7LX4C55zpIFs848XcN48wCQYHKoZIzjgEAwQuMCwCFBX%2FHtKV5TBv1B0mPqCg1PtTBZdwAhRjavSq2YPuBpqgP8sNyIlpOjrErg%3D%3D; JSESSIONID=iJCq8xBkqdkApHmJ2I4uFNNrGzmSeQF-Y2kA_SAPConICn8LO1KfOR_fOy7yPqkd; JSESSIONMARKID=WLat-wIp_thozdBQm9mBP3eastaQHvQobG3H5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: JSON.stringify({
    "CUST_ID": 6
  })
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body));
});


})


