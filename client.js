const coap = require('coap')

let menu = require('node-menu')

setInterval(() => {
  coap
    .request({
      hostname: 'localhost',
      pathname: '/sensores/luminosidad',
      method: 'GET'
    })
    .on('response', (res) => {
      let valores = JSON.parse(res.payload.toString());
      console.log(valores.estado)
    })
    .end()

  coap
    .request({
      hostname: 'localhost',
      pathname: '/sensores/humo',
      method: 'GET'
    })
    .on('response', (res) => {
      let valores = JSON.parse(res.payload.toString());
      console.log(valores.estado)
    })
    .end()

  coap
    .request({
      hostname: 'localhost',
      pathname: '/sensores/computadora',
      method: 'GET'
    })
    .on('response', (res) => {
      let valores = JSON.parse(res.payload.toString());
      console.log(valores.estado)
    })
    .end()

  coap
    .request({
      hostname: 'localhost',
      pathname: '/sensores/puerta',
      method: 'GET'
    })
    .on('response', (res) => {
      let valores = JSON.parse(res.payload.toString());
      console.log(valores.estado)
    })
    .end()
}, 100);




