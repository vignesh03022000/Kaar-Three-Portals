var request = require('request');
var pareString = require('xml2js').parseString;
const express = require("express");
const cors=require('cors');
const app=express();
 const bodyParser = require('body-parser');
 var moment =require("moment");


app.use(cors());
app.use(bodyParser.json())


app.listen(3000,()=>
{
    console.log("Express rening");
});

app.post('/employee/login',(req,res)=>
{

    
    var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/emp/login_vk',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'JSESSIONID=l3OuSZ4-qGV5nEafE-PTVYuID3KJegF-Y2kA_SAPT7nVunzq1jzffpYeTZYyeFkj; JSESSIONMARKID=uefWuAHftM2ze8NeYxR5GrKu8wVnGiEpPmkH5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: JSON.stringify({
    "EMP_ID": "5016"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body))
});


})


app.post('/employee/profile',(req,res)=>
{

    var request = require('request');
    var options = {
      'method': 'POST',
      'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/employee/profile_vk',
      'headers': {
        'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
        'Content-Type': 'application/json',
        'Cookie': 'JSESSIONID=l3OuSZ4-qGV5nEafE-PTVYuID3KJegF-Y2kA_SAPT7nVunzq1jzffpYeTZYyeFkj; JSESSIONMARKID=uefWuAHftM2ze8NeYxR5GrKu8wVnGiEpPmkH5jaQA; saplb_*=(J2EE6906720)6906750'
      },
      body: JSON.stringify({
        "EMP_ID": "5016"
      })
    
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
      res.json(JSON.parse(response.body))

    });


})


app.post('/employee/edit',(req,res)=>
{

   first=req.body.first;
   last=req.body.last;
   city =req.body.city;
   postal =req.body.postal;
   country=req.body.country;
   street =req.body.street;
    phone=req.body.phone
   console.log(first)

    var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/employee/update_vk',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'JSESSIONID=l3OuSZ4-qGV5nEafE-PTVYuID3KJegF-Y2kA_SAPT7nVunzq1jzffpYeTZYyeFkj; JSESSIONMARKID=eFVJhAr3y4FAtaVJL-7gwxpY2E-zLQ_cbaln5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: JSON.stringify({
    "EMP_ID": "5016",
    "FNAME": first,
    "LNAME": last,
    "STREET": street,
    "CITY": city,
    "COUNTRY": country,
    "POSTAL": postal,
    "TELEPHONE": phone,
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body))
});

})


app.post('/employee/leave',(req,res)=>
{
start=req.body.Start;
end=req.body.End

var startDate = moment(start, "YYYY/MM/DD");
var endDate =moment(end,'YYYY/MM/DD');
console.log(startDate)
console.log(startDate.format('YYYY/MM/DD'));
startDate=startDate.format('YYYY/MM/DD')
endDate=endDate.format('YYYY/MM/DD')
startDate = startDate.split("/").join("");
endDate = endDate.split("/").join("");
startDate=startDate.toString();
endDate=endDate.toString();
console.log(startDate)
    var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/employee/leave_create_vk',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'JSESSIONID=l3OuSZ4-qGV5nEafE-PTVYuID3KJegF-Y2kA_SAPT7nVunzq1jzffpYeTZYyeFkj; JSESSIONMARKID=HxEm8A74tjG2aNz3_Rb70nYoKAXPqzWl6smH5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: JSON.stringify({
    "EMP_ID": "5016",
    "START_DATE_": startDate,
    "END_DATE_": endDate,
    "START_TIME_": "00:00:00",
    "END_TIME_": "00:00:00",
    "LEAVE_TYPE_": "1001",
    "TOTAL_HOURS_": "7"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body))
});


})

app.post('/employee/leave/detail',(req,res)=>
{
    var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/employee/leave_detail_vk',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'JSESSIONID=aqltkimYKboEHmj5cCD6ZhXSa0GMegF-Y2kA_SAPzkEWimLGAciCmaB4kaaz_0Q3; JSESSIONMARKID=2uFRhgrkiZX0ZDuqpKgncWUiAYxCzFCSXHu35jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: JSON.stringify({
    "EMP": "5016"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body))
});
})


app.post('/employee/leave/type',(req,res)=>
{
    
    var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/employee/leave_type_vk1',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'JSESSIONID=aqltkimYKboEHmj5cCD6ZhXSa0GMegF-Y2kA_SAPzkEWimLGAciCmaB4kaaz_0Q3; JSESSIONMARKID=2uFRhgrkiZX0ZDuqpKgncWUiAYxCzFCSXHu35jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: JSON.stringify({
    "EMP_ID": "5016"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body))
});



})

app.post('/employee/final',(req,res)=>
{


    var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/employee/final_set_vk',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'JSESSIONID=l3OuSZ4-qGV5nEafE-PTVYuID3KJegF-Y2kA_SAPT7nVunzq1jzffpYeTZYyeFkj; JSESSIONMARKID=HxEm8A74tjG2aNz3_Rb70nYoKAXPqzWl6smH5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: JSON.stringify({
    "EMP_ID": "5016"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body))
});



    
})



