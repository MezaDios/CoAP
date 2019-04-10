const coap = require('coap');

let requestPC = coap.request({
    hostname: 'localhost',
    pathname: '/sensores/computadora',
    method: 'POST'
})

let requestPH = coap.request({
    hostname: 'localhost',
    pathname: '/sensores/humo',
    method: 'POST'
})

let requestPL = coap.request({
    hostname: 'localhost',
    pathname: '/sensores/luminosidad',
    method: 'POST'
})

let requestPP = coap.request({
    hostname: 'localhost',
    pathname: '/sensores/puerta',
    method: 'POST'
})

requestPC.end()
requestPH.end()
requestPL.end()
requestPP.end()

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

setInterval(() => {

    let luminosidad = Math.floor(Math.random() * (11 - 1)) + 1

    console.log(`Luminosidad: ${luminosidad}%`)

    let req = coap.request({
        hostname: 'localhost',
        pathname: `/sensores/luminosidad-${luminosidad}`,
        method: 'PUT'
    })

    req.end()
}, 5000)

setInterval(() => {
    let aleatorio = Math.floor(Math.random() * (2 - 0)) + 0

    let estadoHumo = null

    if (aleatorio == 1) {
        estadoHumo = "Humo presente"
    }
    else {
        estadoHumo = "Sin humo"
    }

    console.log(estadoHumo)

    let req = coap.request({
        hostname: 'localhost',
        pathname: `/sensores/humo-${estadoHumo}`,
        method: 'PUT'
    })

    req.end()
}, 5000)

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
        pathname: `/sensores/computadora-${estadoPC}`,
        method: 'PUT'
    })

    req.end()
}, 5000)