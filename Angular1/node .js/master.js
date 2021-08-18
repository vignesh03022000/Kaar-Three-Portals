var express= require("express")
var cors =require ("cors")

const app=express();
app.use(cors())
app.listen(3000,()=>
{
console.log("Running")
}
)
app.post("/master",(req,res)=>
{
  var array=req.body;


  var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/master',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "FIRST_NAME": "Mani",
    "LAST_NAME": "S",
    "STREET": "ABC STREET",
    "CITY": "MUMBAI",
    "PINCODE": "123456",
    "REGION": "MG",
    "COUNTRY": "IN",
    "LANGUAGE": "EN",
    "TELEPHONE": "1234567890",
    "CUST_ID": "TESTCRD",
    "DISTCHANNEL": "S1",
    "DIVISION": "S1",
    "SALESORG": "SA01"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});










  console.log(array);
})