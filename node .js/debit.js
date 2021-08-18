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
    "CUST_ID": "1"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
