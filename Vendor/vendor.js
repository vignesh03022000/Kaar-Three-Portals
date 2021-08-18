var request=require('request');
var pareString =require('xml2js').parseString;
const express=require("express");
const cors=require('cors');
const app=express();
 const bodyParser =require('body-parser');
var moment =require("moment");
//console.log(moment)

app.use(cors());
app.use(bodyParser.json())


app.listen(3000,()=>
{
    console.log("Express rening");
});

app.post('/vendor/login',(req,res)=>
{
    vendor=req.body.vendor;
    
    console.log(vendor);
   // console.log(req);

var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/login_vk',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'JSESSIONID=wgCAbOuPyAQjyGimKsvNI2zu5z4VegF-Y2kA_SAPuPh59EPPgX4w6x_Dr1gMto40; JSESSIONMARKID=mCxY_A0EwcM1hJME0obvAqe0W8CYPFDATVo35jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: JSON.stringify({
    "VENDOR_ID": 1
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body));
});

   });




//    -----------------Vendor Details--------------------

app.post('/vendor/detail',(req,res)=>
{
    console.log(req.body.vendor);

    var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/vendor/detail_vK',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'JSESSIONID=iDZgwOwqbrzcRxTDTQovALkTcnd2egF-Y2kA_SAPnwOF9Ucng13gDp9aJP9-s2_M; JSESSIONMARKID=2I4YVg8l2EPvCRz6POEwYnw72AgYINAP5Nb35jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: JSON.stringify({
    "VENDOR_ID": 1
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body));
});


})

//    -----------------Vendor Details--------------------


app.post('/vendor/edit',(req,res)=>
{

    user=req.body.username;
    console.log(user)

    street=req.body.ngstreet;
    console.log(street)

    nam=req.body.ngname;
    city=req.body.ngcity;
    address=req.body.ngaddress;
    state=req.body.ngstate;
    phone=req.body.ngphone;
// console.log(user)
    var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/vendor/edit01_vk',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'JSESSIONID=QOZQtc7Zn3vXqcY3B62PW0KGElR6egF-Y2kA_SAPQq0rltqps8I5S9Wf-FZOtTAJ; JSESSIONMARKID=aycx-gsX6usXBCtvcU38nh3KjEXuPePz07qn5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: JSON.stringify({
    "VENDOR": "1",
    "TITLE": "THE King",
    "FNAME": nam,
    "LNAME": "Vel",
    "STREET": address,
    "CITY": city,
    "DISTRICT": state,
    "COUNTRY": "INDIA",
    "PIN_CODE": "605008",
    "PHONE1": phone,
    "FAXNUM": "012475035"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body))
});
})


// -----------------Vendor Credit--------------

// vendor/credit
app.post("/vendor/credit",(req,res)=>
{
  var request = require('request');
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/vendor/credit_vk',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'JSESSIONID=fciQlbfSsmMKPIVS63WFzX0t0Zt5egF-Y2kA_SAPSu2vmc8brhaoJ68wsJFT2tee; JSESSIONMARKID=P2cPPw8ylLVXD-jzwnTtMN3-m7mj5dGro_n35jaQA; saplb_*=(J2EE6906720)6906750'
    },
    body: JSON.stringify({
      "VENDOR_ID": "10067"
    })
  
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.json(JSON.parse(response.body))
  });
})


// ---------vendor debit----------
app.post('/vendor/debit',(req,res)=>
{
  var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/vendor/debit_vk',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'JSESSIONID=fciQlbfSsmMKPIVS63WFzX0t0Zt5egF-Y2kA_SAPSu2vmc8brhaoJ68wsJFT2tee; JSESSIONMARKID=P2cPPw8ylLVXD-jzwnTtMN3-m7mj5dGro_n35jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: JSON.stringify({
    "VENDOR_ID": "10067"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body))
});
})

// ----------vendor invoic------------


app.post('/vendor/invoice_detail',(req,res)=>
{
  var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/vendor/invoice_details_vk',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'JSESSIONID=fciQlbfSsmMKPIVS63WFzX0t0Zt5egF-Y2kA_SAPSu2vmc8brhaoJ68wsJFT2tee; JSESSIONMARKID=owlrMwuhyiVXk1n8Ms8KdeR2V9uNaA9rJvpX5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: JSON.stringify({
    "VENDOR_ID": "10067"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body))
});
})



// ---------vendor po ------------

app.post('/vendor/po',(req,res)=>
{
  var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/vendor/po_vk',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'JSESSIONID=fciQlbfSsmMKPIVS63WFzX0t0Zt5egF-Y2kA_SAPSu2vmc8brhaoJ68wsJFT2tee; JSESSIONMARKID=P2cPPw8ylLVXD-jzwnTtMN3-m7mj5dGro_n35jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: JSON.stringify({
    "VENDOR_ID": "10067"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body))



  
});
})


// --------vendor rfq-----------


app.post('/vendor/rfq',(req,res)=>
{
  var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/vendor/rfq_vk',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'JSESSIONID=fciQlbfSsmMKPIVS63WFzX0t0Zt5egF-Y2kA_SAPSu2vmc8brhaoJ68wsJFT2tee; JSESSIONMARKID=l4GMYwC5e5XqXBDHwciTDR2r-3wWyBMtizqH5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: JSON.stringify({
    "VENDOR_ID": "10036"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body))
});
})


// -------payment----------
app.post("/vendor/payment",(req,res)=>
{
  var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/vendor/pay_vk',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'JSESSIONID=fciQlbfSsmMKPIVS63WFzX0t0Zt5egF-Y2kA_SAPSu2vmc8brhaoJ68wsJFT2tee; JSESSIONMARKID=tX7uTwGX0sWsJ031MlaE5ccUwUjY7Wzw-won5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: JSON.stringify({
    "VENDOR_ID": "10067"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  // res.json(JSON.parse(response.body))


  var a=JSON.parse(response.body);
  // console.log(a.IT_PAYAG.item[0].PSTNG_DATE)
  // var b=a.IT_PAYAG.item[0].PSTNG_DATE;
 let arr=[]



  for(let pay of a.IT_PAY.item)
  {
     var b=pay.PSTNG_DATE
    var startDate = moment(b, "YYYY/MM/DD");
  var currenDate = moment(new Date()).format("YYYY/MM/DD");
  var endDate = moment(currenDate, "YYYY/MM/DD");
    var re = endDate.diff(startDate, 'days');
    

    var result={
      "IT_PAYAG":pay,
      "end_data":re

    }
    arr.push(result)

    //console.log("Diff" +result)
  }

  
   
    res.json((arr));
    


});


})

// ------------------Vendor bill------------------


app.post("/vendor/invoice/bill",(req,res)=>
{
  var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/vendor/invoice_gen2_vk',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'JSESSIONID=S9H6a27eBRLwh1aXl8IzaU7FsOGaegF-Y2kA_SAPJGj5sAixlKCN-29mT3WPhvtE; JSESSIONMARKID=Rpr0uQSL-pSyASMWNiSduK7mpcT5NRISn0mn5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: JSON.stringify({
    "INVOICE": "5105600751",
    "YEAR": "2014"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body))
});

})