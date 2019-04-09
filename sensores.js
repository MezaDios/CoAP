const coap = require('coap');

coap.request({
    hostname: 'localhost',
    pathname: '/sensores/computadora',
    method: 'POST'
})

coap.request({
    hostname: 'localhost',
    pathname: '/sensores/puerta',
    method: 'POST'
})

coap.request({
    hostname: 'localhost',
    pathname: '/sensores/humo',
    method: 'POST'
})

coap.request({
    hostname: 'localhost',
    pathname: '/sensores/luminosidad',
    method: 'POST'
})

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
        pathname: '/sensores/computadora',
        method: 'PUT',
        value: `${estadoPC}`
    })
}, 5000)

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
        pathname: '/sensores/puerta',
        method: 'PUT',
        value: `${estadoPuerta}`
    })
}, 5000)

setInterval(() => {

    let luminosidad = Math.floor(Math.random() * (101 - 1)) + 1

    coap.request({
        hostname: 'localhost',
        pathname: '/sensores/luminosidad',
        method: 'PUT',
        value: luminosidad
    })
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

    coap.request({
        hostname: 'localhost',
        pathname: '/sensores/humo',
        method: 'PUT',
        value: `${estadoHumo}`
    })
}, 5000)