
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/credit',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'JSESSIONID=xI9ZdleH0Mpn9lcxKhKR7G5odB2YeQF-Y2kA_SAPnFp7Gi6lmFcnc0kyLZuqj78G; JSESSIONMARKID=-xLl3QmGgyxkmXShHFeyPjmmcTH0eiEFd9Ln5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: JSON.stringify({
    "CUST_ID": "1"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
