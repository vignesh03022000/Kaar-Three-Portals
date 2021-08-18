var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/salesdetails',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'JSESSIONID=tcxYgpcxEUa3-3nf7C143CEFeLiseQF-Y2kA_SAPYWiEgyE2lQcifzkTAfLpRd7a; JSESSIONMARKID=okvLxQECzcy_ex86QJLmMqu0RXZAjG8KrnaH5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: JSON.stringify({
    "CUST_ID": "8"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
