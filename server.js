let coap = require('coap')

let server = coap.createServer()


let luminosidadActual = "Sin definir"
let estadoHumo = "Sin definir"
let estadoPuerta = "Sin definir"
let estadoComputadora = "Sin definir"

server.listen(() => {
    console.log("Servidor activo")
})

server.on('request', (req, res) => {

    res.setOption('Content-Format', 'application/json');

    let URL = req.url.split('-')[0]

    switch (req.method) {
        case 'GET':
            if (URL == '/sensores/luminosidad') {
                res.end(JSON.stringify({ estado: `Luminosidad: ${luminosidadActual}%` }))
            } else if (URL == '/sensores/computadora') {
                res.end(JSON.stringify({ estado: `Estado de la computadora: ${estadoComputadora}` }))
            } else if (URL == '/sensores/humo') {
                res.end(JSON.stringify({ estado: `Estado del humificador: ${estadoHumo}` }))
            } else if (URL == '/sensores/puerta') {
                res.end(JSON.stringify({ estado: `Estado de la puerta: ${estadoPuerta}` }))
            }
            console.log('Datos enviados correctamente.')
            break
        case 'POST':
            if (URL == '/sensores/luminosidad') {
                console.log("El sensor de luminosidad esta activo")
                res.end()
            } else if (URL == '/sensores/computadora') {
                console.log("El sensor de actividad de la computadora esta activo")
                res.end()
            } else if (URL == '/sensores/humo') {
                console.log("El sensor de humo esta activo")
                res.end()
            } else if (URL == '/sensores/puerta') {
                console.log("El sensor de la puerta esta activo")
                res.end()
            }
            break
        case 'PUT':
            if (URL == '/sensores/luminosidad') {
                luminosidadActual = req.url.split('-')[1]
                console.log(`Nuevo estado de luminosidad: ${luminosidadActual}%`)
                res.end()
            } else if (URL == '/sensores/computadora') {
                estadoComputadora = req.url.split('-')[1]
                console.log(`Nuevo estado de la computadora: ${estadoComputadora}`)
                res.end()
            } else if (URL == '/sensores/humo') {
                estadoHumo = req.url.split('-')[1]
                console.log(`Nuevo estado de humo: ${estadoHumo}`)
                res.end()
            } else if (URL == '/sensores/puerta') {
                estadoPuerta = req.url.split('-')[1]
                console.log(`Nuevo estado de la puerta: ${estadoPuerta}`)
                res.end()
            }
            break
        default:
            res.end()
            break
    }
})