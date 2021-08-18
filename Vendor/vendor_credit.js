var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/vendor/credit_vk',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'JSESSIONID=fciQlbfSsmMKPIVS63WFzX0t0Zt5egF-Y2kA_SAPSu2vmc8brhaoJ68wsJFT2tee; JSESSIONMARKID=P2cPPw8ylLVXD-jzwnTtMN3-m7mj5dGro_n35jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: JSON.stringify({
    "VENDOR_ID": "10067"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});