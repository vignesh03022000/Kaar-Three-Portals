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
});
