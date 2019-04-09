const coap = require('coap');

coap
  .request({
    hostname: 'localhost',
    pathname: '/sensors/node1/humidity',
    method: 'GET',
  })
  .on('response', (res) => {
    const values = JSON.parse(res.payload.toString()); 
    console.log({ values });
    console.log(values.humidity)
  })
  .end();

coap
  .request({
    hostname: 'localhost',
    pathname: '/sensors/node1/sprinkler',
    method: 'POST',
  })
  .on('response', (res) => {
    console.log(res.payload.toString());
  })
  .end();


