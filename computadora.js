const coap = require('coap');

let request = coap.request({
    hostname: 'localhost',
    pathname: '/sensores/computadora',
    method: 'POST'
})

request.end()

setInterval(() => {
    let aleatorio = Math.floor(Math.random() * (2 - 0)) + 0

    let estadoPC = null

    if (aleatorio == 1) {
        estadoPC = "PC encendida"
    }
    else {
        estadoPC = "PC apagada"
    }

    console.log(estadoPC)

    let req = coap.request({
        hostname: 'localhost',
        pathname: `/sensores/computadora`,
        method: 'PUT'
    })
    req.on('response', (res) => {
        let respuesta = JSON.parse(res.payload.toString());
        console.log(respuesta.estado)
    })
    req.end(JSON.stringify({ value: `${estadoPC}` }))
}, 5000)