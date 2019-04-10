const coap = require('coap');

let request = coap.request({
    hostname: 'localhost',
    pathname: '/sensores/puerta',
    method: 'POST'
})

request.end()

setInterval(() => {

    let aleatorio = Math.floor(Math.random() * (2 - 0)) + 0

    let estadoPuerta = null

    if (aleatorio == 1) {
        estadoPuerta = "Puerta abierta"
    }
    else {
        estadoPuerta = "Puerta cerrada"
    }

    console.log(estadoPuerta)

    let req = coap.request({
        hostname: 'localhost',
        pathname: `/sensores/puerta-${estadoPuerta}`,
        method: 'PUT'
    })

    req.end()
}, 5000)
