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
    console.log(req);

    res.setOption('Content-Format', 'application/json');
    switch (req.method) {
        case 'GET':
            if (req.url == '/sensores/luminosidad') {
                res.end(JSON.stringify({ estado: `Luminosidad: ${luminosidadActual}%` }))
            } else if (req.url == '/sensores/computadora') {
                res.end(JSON.stringify({ estado: `Estado de la computadora: ${estadoComputadora}` }))
            } else if (req.url == '/sensores/humo') {
                res.end(JSON.stringify({ estado: `Estado del humificador: ${estadoHumo}` }))
            } else if (req.url == '/sensores/puerta') {
                res.end(JSON.stringify({ estado: `Estado de la puerta: ${estadoPuerta}` }))
            }
            break
        case 'POST':
            if (req.url == '/sensores/luminosidad') {
                console.log("El sensor de luminosidad esta activo")
            } else if (req.url == '/sensores/computadora') {
                console.log("El sensor de actividad de la computadora esta activo")
            } else if (req.url == '/sensores/humo') {
                console.log("El sensor de humo esta activo")
            } else if (req.url == '/sensores/puerta') {
                console.log("El sensor de la puerta esta activo")
            }
            break
        case 'PUT':
            if (req.url == '/sensores/luminosidad') {
                luminosidadActual = req.value
                res.end()
            } else if (req.url == '/sensores/computadora') {
                estadoComputadora = req.value
                res.end()
            } else if (req.url == '/sensores/humo') {
                estadoHumo = req.headers
                res.end()
            } else if (req.url == '/sensores/puerta') {
                estadoPuerta = req.value
                res.end()
            }
            break
        default:
            res.end()
            break
    }
})