const coap = require('coap');

setInterval(() => {

    let aleatorio = Math.floor(Math.random() * (2 - 0)) + 0

    let estadoPC = null

    if (aleatorio == 1) {
        estadoPC = "PC encendida"
    }
    else {
        estadoPC = "PC apagada"
    }

    coap.request({
        hostname: 'localhost',
        pathname: 'sensores/computadora',
        method: 'PUT',
        value: `${estadoPC}`
    })
    coap.end();
}, 5000)