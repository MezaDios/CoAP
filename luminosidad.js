const coap = require('coap');

let request = coap.request({
    hostname: 'localhost',
    pathname: '/sensores/luminosidad',
    method: 'POST'
})

request.end()

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