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
});