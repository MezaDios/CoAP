const coap = require('coap');


let aleatorio = Math.floor(Math.random() * (2 - 0)) + 0

let estadoHumo = null

if (aleatorio == 1) {
    estadoHumo = "Humo presente"
}
else {
    estadoHumo = "Sin humo"
}

coap
    .request({
        hostname: 'localhost',
        pathname: '/sensores/humo',
        method: 'PUT',
        headers: `${estadoHumo}`
    })