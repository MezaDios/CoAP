const coap = require('coap');

setInterval(() => {

    let luminosidad = Math.floor(Math.random() * (11 - 1)) + 1

    coap.request({
        hostname: 'localhost',
        pathname: 'sensores/luminosidad',
        method: 'PUT',
        value: luminosidad
    })
    coap.end();
}, 5000)