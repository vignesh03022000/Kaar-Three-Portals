var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/pay',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'JSESSIONID=Gt8AJLpnK9MjjsbxL_uHuZ0XGkukeQF-Y2kA_SAPG2U-fGpKqNxRSErqm3aYu_wS; JSESSIONMARKID=jkuJjAGm_WXy-51_lI4I5eLFMBw-MOdNxQ6H5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: JSON.stringify({
    "CUST_ID": "18"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
