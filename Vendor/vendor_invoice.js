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
});
