const coap = require('coap');

let request = coap.request({
    hostname: 'localhost',
    pathname: '/sensores/luminosidad',
    method: 'POST'
})

request.end()

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