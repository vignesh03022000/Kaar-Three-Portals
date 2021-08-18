var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/vendor/detail_vK',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'JSESSIONID=iDZgwOwqbrzcRxTDTQovALkTcnd2egF-Y2kA_SAPnwOF9Ucng13gDp9aJP9-s2_M; JSESSIONMARKID=2I4YVg8l2EPvCRz6POEwYnw72AgYINAP5Nb35jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: JSON.stringify({
    "VENDOR_ID": 1
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});