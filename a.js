const coap = require('coap');
const server = coap.createServer();

server.on('request', (req, res) => {
  console.log(req);

  switch (req.url) {
    case '/sensors/node1/humidity':
      res.setOption('Content-Format', 'application/json');
      res.end(JSON.stringify({ humidity: '40%' }));
    case '/sensors/node1/sprinkler':
      if (req.method === 'GET') {
        res.end(JSON.stringify({ sprinklerState: 'off' }));
      } else if (req.method === 'POST') {
        console.log('Sprinkler is turned on.');
        res.end(JSON.stringify({ sprinklerState: 'on' }))
      }
    default:
      res.end();
  }
});

server.listen(() => {
  console.log('Server is listening');
});