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
});
