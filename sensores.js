const coap = require('coap');

let requestPC = coap.request({
    hostname: 'localhost',
    pathname: '/sensores/computadora',
    method: 'POST'
})
requestPC.on('response', (res) => {
    let respuesta = JSON.parse(res.payload.toString());
    console.log(respuesta.estado)
})
requestPC.write(JSON.stringify({ activar: true }))
requestPC.end()


let requestPH = coap.request({
    hostname: 'localhost',
    pathname: '/sensores/humo',
    method: 'POST'
})
requestPH.on('response', (res) => {
    let respuesta = JSON.parse(res.payload.toString());
    console.log(respuesta.estado)
})
requestPH.write(JSON.stringify({ activar: true }))
requestPH.end()


let requestPL = coap.request({
    hostname: 'localhost',
    pathname: '/sensores/luminosidad',
    method: 'POST'
})
requestPL.on('response', (res) => {
    let respuesta = JSON.parse(res.payload.toString());
    console.log(respuesta.estado)
})
requestPL.write(JSON.stringify({ activar: true }))
requestPL.end()


let requestPP = coap.request({
    hostname: 'localhost',
    pathname: '/sensores/puerta',
    method: 'POST'
})
requestPP.on('response', (res) => {
    let respuesta = JSON.parse(res.payload.toString());
    console.log(respuesta.estado)
})
requestPP.write(JSON.stringify({ activar: true }))
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
        pathname: `/sensores/puerta`,
        method: 'PUT'
    })
    req.on('response', (res) => {
        let respuesta = JSON.parse(res.payload.toString());
        console.log(respuesta.estado)
    })
    req.end(JSON.stringify({ value: `${estadoPuerta}` }))
}, 5000)

setInterval(() => {

    let luminosidad = Math.floor(Math.random() * (101 - 1)) + 1

    console.log(`Luminosidad: ${luminosidad}%`)

    let req = coap.request({
        hostname: 'localhost',
        pathname: `/sensores/luminosidad`,
        method: 'PUT'
    })
    req.on('response', (res) => {
        let respuesta = JSON.parse(res.payload.toString());
        console.log(respuesta.estado)
    })
    req.end(JSON.stringify({ value: `${luminosidad}` }))
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
        pathname: `/sensores/humo`,
        method: 'PUT'
    })
    req.on('response', (res) => {
        let respuesta = JSON.parse(res.payload.toString());
        console.log(respuesta.estado)
    })
    req.end(JSON.stringify({ value: `${estadoHumo}` }))
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
        pathname: `/sensores/computadora`,
        method: 'PUT'
    })
    req.on('response', (res) => {
        let respuesta = JSON.parse(res.payload.toString());
        console.log(respuesta.estado)
    })
    req.end(JSON.stringify({ value: `${estadoPC}` }))
}, 5000)