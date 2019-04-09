const coap = require('coap');

setInterval(() => {

    let aleatorio = Math.floor(Math.random() * (2 - 0)) + 0

    let estadoPuerta = null

    if (aleatorio == 1) {
        estadoPuerta = "Puerta abierta"
    }
    else {
        estadoPuerta = "Puerta cerrada"
    }

    coap.request({
        hostname: 'localhost',
        pathname: 'sensores/puerta',
        method: 'PUT',
        value: `${estadoPuerta}`
    })
    coap.end();
}, 5000)
