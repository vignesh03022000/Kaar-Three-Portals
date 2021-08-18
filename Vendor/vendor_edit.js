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
    "FNAME": "Shakthi",
    "LNAME": "Vel",
    "STREET": "BARATHI STREET",
    "CITY": "TAMIL NADU",
    "DISTRICT": "VELLOR",
    "COUNTRY": "INDIA",
    "PIN_CODE": "605008",
    "PHONE1": "9874561230",
    "FAXNUM": "012475035"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});