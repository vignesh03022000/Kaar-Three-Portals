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


app.post('/login',(req,res)=>
{
    user=req.body.username;
    pass=req.body.password;
    console.log(user,pass);
   // console.log(req);

   var request = require('request');
   var options = {
     'method': 'POST',
     'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VK_CUSTLOGIN_SENDER&receiverParty=&receiverService=&interface=SI_CUST_LOGIN_VK&interfaceNamespace=http://vickycustomportl.com',
     'headers': {
       'SOAPAction': '"http://sap.com/xi/WebService/soap1.1"',
       'Content-Type': 'text/xml',
       'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
       'Cookie': 'MYSAPSSO2=AjExMDAgAA1wb3J0YWw6UE9VU0VSiAAHZGVmYXVsdAEABlBPVVNFUgIAAzAwMAMAA0tQTwQADDIwMjEwNTE4MDM1NAUABAAAAAgKAAZQT1VTRVL%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjEwNTE4MDM1NDExWjAjBgkqhkiG9w0BCQQxFgQU63ojbhOg!psJ%2FLWfE1t7bD4o3F4wCQYHKoZIzjgEAwQuMCwCFGEWf3SMQHy3jgPb%2FEIXpqT8doE2AhQyOzaDLYRRDHw4zkcQPUPY7UvrEw%3D%3D; JSESSIONID=avUYF5ZixeQN18W0PDKqaii9FZx9eQF-Y2kA_SAPJ7ypWouIGOHE0vd-tO-SZP0Q; saplb_*=(J2EE6906720)6906750'
     },
     body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZBAPI_CUST_LOGIN_VK>\r\n         <!--You may enter the following 2 items in any order-->\r\n        <USERNAME>'+user+'</USERNAME> \r\n <PASSWORD>'+pass+'</PASSWORD>\r\n       </urn:ZBAPI_CUST_LOGIN_VK>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'
   
   };
   request(options, function (error, response) {
     if (error) throw new Error(error);
     console.log(response.body);
     var xml=response.body;
  pareString(xml,function(err,result)
  {
      result=result['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_CUST_LOGIN_VK.Response'][0]['BAPIRETURN'][0]['TYPE'][0];
      console.log(result)
  
  if(result =='S')
  {
      res.json({'username':user,'isSuccess':true})
  }
  else{
    res.json({'username':user,'isSuccess':false})
  }
});
});
   });

/////profileeeeeeeeeeeeeeeeee

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
    "USERNAME": user
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body));
});
});



///salessssss

app.post('/salesdetails',(req,res)=>
{
    user=req.body.username;
   
    console.log(user);
   // console.log(req);


var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/salesdetails',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA1wb3J0YWw6UE9VU0VSiAAHZGVmYXVsdAEABlBPVVNFUgIAAzAwMAMAA0tQTwQADDIwMjEwNTIyMDM1OAUABAAAAAgKAAZQT1VTRVL%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjEwNTIyMDM1ODA2WjAjBgkqhkiG9w0BCQQxFgQU57JXKIm7LX4C55zpIFs848XcN48wCQYHKoZIzjgEAwQuMCwCFBX%2FHtKV5TBv1B0mPqCg1PtTBZdwAhRjavSq2YPuBpqgP8sNyIlpOjrErg%3D%3D; JSESSIONID=iJCq8xBkqdkApHmJ2I4uFNNrGzmSeQF-Y2kA_SAPConICn8LO1KfOR_fOy7yPqkd; JSESSIONMARKID=WLat-wIp_thozdBQm9mBP3eastaQHvQobG3H5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: JSON.stringify({
    "CUST_ID":8
  })


};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body));
});
});

////edit----------------------------------------

app.post('/customer/edit',(req,res)=>
{
    user=req.body.username;
    street=req.body.ngstreet;

    nam=req.body.ngname;
    city=req.body.ngcity;
    address=req.body.ngaddress;
    state=req.body.ngstate;
    console.log(user);
    console.log(street);

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
    "USERNAME": user,
    "STREET":street,
    "NAME":nam,
    "ADDRESS":address,
    "STATE":state,
    "CITY":city

  
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body));
});
});

/////////Inquiry Details head and item ////////


app.post("/inquiry/detail",(req,res)=>
{
  cust_id =req.body.cust_id;
  console.log(cust_id)
  var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/inquiry/detail',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'JSESSIONID=V3hAWLP5RhLSY6WbuAfYdx_WRImeeQF-Y2kA_SAP0Qk2BxbpYQNnnIxAIz7w6Ptu; JSESSIONMARKID=nul0fg9lv5uoH8fgQfPzdgCAerMAo5OPR3kH5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: JSON.stringify({
    "CUST_ID": 18
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body));
});
});



//credit////////////////////////////
app.post('/credit',(req,res)=>
{
  cust_id = req.body.cust_id
  console.log(cust_id)
  var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/credit',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'JSESSIONID=xI9ZdleH0Mpn9lcxKhKR7G5odB2YeQF-Y2kA_SAPnFp7Gi6lmFcnc0kyLZuqj78G; JSESSIONMARKID=-xLl3QmGgyxkmXShHFeyPjmmcTH0eiEFd9Ln5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: JSON.stringify({
    "CUST_ID": 1
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
 // console.log(response.body);
  res.json(JSON.parse(response.body));
});
})

//debit////////////////////////////////////
app.post('/debit',(req,res)=>
{
  cust_id = req.body.cust_id
  console.log(cust_id)
  var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/debit',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'JSESSIONID=YHwt5sdbkXvjzJ5JXpVNeHV9daOYeQF-Y2kA_SAP2qDIpIQI537IZ3d6Nz-Jf1IP; JSESSIONMARKID=NhE8EwyZFZNMacmUlzlkPgxMQydtzJFRV6Nn5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: JSON.stringify({
    "CUST_ID": 1
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
 console.log(response.body);
  res.json(JSON.parse(response.body));
});

})
////deliveryyyyyyyy


// app.post('/delivery',(req,res)=>
// {
//   var request = require('request');
// var options = {
//   'method': 'POST',
//   'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/delivery',
//   'headers': {
//     'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
//     'Content-Type': 'application/json',
//     'Cookie': 'MYSAPSSO2=AjExMDAgAA1wb3J0YWw6UE9VU0VSiAAHZGVmYXVsdAEABlBPVVNFUgIAAzAwMAMAA0tQTwQADDIwMjEwNTIyMDM1OAUABAAAAAgKAAZQT1VTRVL%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjEwNTIyMDM1ODA2WjAjBgkqhkiG9w0BCQQxFgQU57JXKIm7LX4C55zpIFs848XcN48wCQYHKoZIzjgEAwQuMCwCFBX%2FHtKV5TBv1B0mPqCg1PtTBZdwAhRjavSq2YPuBpqgP8sNyIlpOjrErg%3D%3D; JSESSIONID=iJCq8xBkqdkApHmJ2I4uFNNrGzmSeQF-Y2kA_SAPConICn8LO1KfOR_fOy7yPqkd; JSESSIONMARKID=WLat-wIp_thozdBQm9mBP3eastaQHvQobG3H5jaQA; saplb_*=(J2EE6906720)6906750'
//   },
//   body: JSON.stringify({
//     "CUST_ID": 18
//   })
// };
// request(options, function (error, response) {
//   if (error) throw new Error(error);
//   console.log(response.body);
//   res.json(JSON.parse(response.body));
// });


// })


//////////////////////payyyyyyyyyyyyyyyyyyy

app.post('/pay',(req,res)=>
{
  
 


var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/pay',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'JSESSIONID=Gt8AJLpnK9MjjsbxL_uHuZ0XGkukeQF-Y2kA_SAPG2U-fGpKqNxRSErqm3aYu_wS; JSESSIONMARKID=jkuJjAGm_WXy-51_lI4I5eLFMBw-MOdNxQ6H5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: JSON.stringify({
    "CUST_ID": "18"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  
  var a=JSON.parse(response.body);
  // console.log(a.IT_PAYAG.item[0].PSTNG_DATE)
  // var b=a.IT_PAYAG.item[0].PSTNG_DATE;
 let arr=[]



  for(let pay of a.IT_PAYAG.item)
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
    







  //for
 

  


  


 // console.log(response.body.IT_PAYAG.item[0]);
 // res.json(JSON.parse(response.body));
});
})

//////////////////////// master 

app.post("/master",(req,res)=>
{ 

     /*var array=req.body;
   
    console.log(req.body[i])
    console.log("firstname :"+ req.body[i][0])
    console.log("LastName:"+ req.body[i][1])
    console.log(req.body[i][2])
    console.log(req.body[i][3])
    console.log(req.body[i][4])
    console.log(req.body[i][5])
    console.log(req.body[i][6])
    console.log(req.body[i][7])
    console.log(req.body[i][8])
    console.log(req.body[i][9])
    console.log(req.body[i][10])
    console.log(req.body[i][11])
    console.log(req.body[i][12])*/

    var first_name= req.body[0]
    var last_name =req.body[1];
    var  street =req.body[2];
    var city =req.body[3];
    var pincode =req.body[4];
    var region =req.body[5];
    var country =req.body [6];
    var language =req.body[7];
    var telephone =req.body[8];
    var cust_id =req.body[9];
    var distchannel =req.body[10];
    var division =req.body[11];
    var  salesorg =req.body[12];

//// each element
var request = require('request');
//i=1
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/master',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "FIRST_NAME": first_name,
    "LAST_NAME": last_name,
    "STREET": street,
    "CITY": city,
    "PINCODE": pincode,
    "REGION": region,
    "COUNTRY": country,
    "LANGUAGE": language,
    "TELEPHONE": telephone,
    "CUST_ID": cust_id,
    "DISTCHANNEL": distchannel,
    "DIVISION": division,
    "SALESORG": salesorg
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error) ;
 
var a=JSON.parse(response.body)
var b=a.CUST;
res.json(b)



//console.log(a);
// console.log("Vicky"+b);
// arr.push(b);

// console.log(arr,i);
  //console.log(response.body);


  //res.json(JSON.parse(response.body));


});
    
  })






   
   

 app.post('/delivery',(req,res)=>
 {
  var request = require('request');
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/delivery_te',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'JSESSIONID=6kn0IEOMJvJCJaTiMQiha7LjsjD-eQF-Y2kA_SAPa3ZgqqXLVxLVAe_jUNoi78Qk; JSESSIONMARKID=4LimTgT_pr2MipgdQFHL5No0VLmeFfLHsIRH5jaQA; saplb_*=(J2EE6906720)6906750'
    },
    body: JSON.stringify({
      "CUST_ID": 11
    })
  
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    
    console.log(response.body);
    res.json(JSON.parse(response.body))
  });
 })
