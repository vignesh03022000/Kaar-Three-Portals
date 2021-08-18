
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
app.post('/cust/profile',(req,res)=>
{
    user=req.body.username;
   
    console.log(user);

var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/cust/profile',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'JSESSIONID=stF3MFCA6HAXF2B6mOUZeWMtGJqXeQF-Y2kA_SAP3Cp6IUYMQpod9WarAdIkt8ou; JSESSIONMARKID=_ifbpwVfNh_k6S8b6MOJFU0zFRwGmC-fCoJn5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: JSON.stringify({
    "USERNAME": 2
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body));
});
});
