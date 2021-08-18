var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/inquiry/list',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'JSESSIONID=V3hAWLP5RhLSY6WbuAfYdx_WRImeeQF-Y2kA_SAP0Qk2BxbpYQNnnIxAIz7w6Ptu; JSESSIONMARKID=ECQ1SA3jjEXKG8E-dzeiGZSuX2t11UUVRRlH5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: JSON.stringify({
    "CUST_ID": "18"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
