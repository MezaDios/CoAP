const coap = require('coap');

let request = coap.request({
    hostname: 'localhost',
    pathname: '/sensores/humo',
    method: 'POST'
})

request.end()

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