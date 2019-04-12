let coap = require('coap')

let server = coap.createServer()

let luminosidadActual = "Sin definir"
let estadoHumo = "Sin definir"
let estadoPuerta = "Sin definir"
let estadoComputadora = "Sin definir"

let luminosidad = false
let humo = false
let computadora = false
let puerta = false

server.listen(() => {
    console.log("Servidor activo")
})

server.on('request', (req, res) => {

    res.setOption('Content-Format', 'application/json')

    let URL = req.url

    let payload = req.payload.toString()

    let valores = ""

    if (payload != "" && payload != null && payload != undefined) {
        valores = JSON.parse(payload)
    }

    switch (req.method) {
        case 'GET':
            if (URL == '/sensores/luminosidad') {
                if (luminosidad) {
                    res.end(JSON.stringify({ estado: `Luminosidad: ${luminosidadActual}%` }))
                }
                else {
                    res.end(JSON.stringify({ estado: 'El sensor de luminosidad no está activo.' }))
                }
            } else if (URL == '/sensores/computadora') {
                if (computadora) {
                    res.end(JSON.stringify({ estado: `Estado de la computadora: ${estadoComputadora}` }))
                }
                else {
                    res.end(JSON.stringify({ estado: 'El sensor de la computadora no está activo.' }))
                }
            } else if (URL == '/sensores/humo') {
                if (humo) {
                    res.end(JSON.stringify({ estado: `Estado del humificador: ${estadoHumo}` }))
                }
                else {
                    res.end(JSON.stringify({ estado: 'El sensor de humo no está activo.' }))
                }
            } else if (URL == '/sensores/puerta') {
                if (puerta) {
                    res.end(JSON.stringify({ estado: `Estado de la puerta: ${estadoPuerta}` }))
                }
                else {
                    res.end(JSON.stringify({ estado: 'El sensor de la puerta no está activo.' }))
                }
            }
            console.log('Datos enviados correctamente.')
            break
        case 'POST':
            if (URL == '/sensores/luminosidad') {
                luminosidad = valores.activar
                console.log("El sensor de luminosidad ahora esta activo")
                res.end(JSON.stringify({ estado: "El sensor de luminosidad ahora esta activo" }))
            } else if (URL == '/sensores/computadora') {
                computadora = valores.activar
                console.log("El sensor de actividad de la computadora ahora esta activo")
                res.end(JSON.stringify({ estado: "El sensor de actividad de la computadora ahora esta activo" }))
            } else if (URL == '/sensores/humo') {
                humo = valores.activar
                console.log("El sensor de humo ahora esta activo")
                res.end(JSON.stringify({ estado: "El sensor de humo ahora esta activo" }))
            } else if (URL == '/sensores/puerta') {
                puerta = valores.activar
                console.log("El sensor de la puerta ahora esta activo")
                res.end(JSON.stringify({ estado: "El sensor de la puerta ahora esta activo" }))
            }
            break
        case 'PUT':
            if (URL == '/sensores/luminosidad') {
                if (luminosidad) {
                    luminosidadActual = valores.value
                    console.log(`Nuevo estado de luminosidad: ${luminosidadActual}%`)
                    res.end(JSON.stringify({ estado: 'Nuevo estado de la luminosidad actualizado.' }))
                }
                else {
                    res.end(JSON.stringify({ estado: 'El sensor de luminosidad no está activo.' }))
                }
            } else if (URL == '/sensores/computadora') {
                if (computadora) {
                    estadoComputadora = valores.value
                    console.log(`Nuevo estado de la computadora: ${estadoComputadora}`)
                    res.end(JSON.stringify({ estado: 'Nuevo estado de la computadora actualizado.' }))
                }
                else {
                    res.end(JSON.stringify({ estado: 'El sensor de la computadora no está activo.' }))
                }
            } else if (URL == '/sensores/humo') {
                if (humo) {
                    estadoHumo = valores.value
                    console.log(`Nuevo estado de humo: ${estadoHumo}`)
                    res.end(JSON.stringify({ estado: 'Nuevo estado de humo actualizado.' }))
                }
                else {
                    res.end(JSON.stringify({ estado: 'El sensor de humo no está activo.' }))
                }
            } else if (URL == '/sensores/puerta') {
                if (puerta) {
                    estadoPuerta = valores.value
                    console.log(`Nuevo estado de la puerta: ${estadoPuerta}`)
                    res.end(JSON.stringify({ estado: 'Nuevo estado de la puerta actualizado.' }))
                }
                else {
                    res.end(JSON.stringify({ estado: 'El sensor de la puerta no está activo.' }))
                }
            }
            break
        default:
            res.end()
            break
    }
})