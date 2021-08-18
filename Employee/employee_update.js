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
    "FNAME": "VVVV",
    "LNAME": "ZZZZ",
    "STREET": "AAAAA",
    "CITY": "QQQQQ",
    "COUNTRY": "IN",
    "POSTAL": "123",
    "TELEPHONE": "99989898"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});