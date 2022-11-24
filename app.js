const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const router = require('./routes/api');
app.use('/api', router);

/*app.get('/', (req, res) => {
    res.send(`<h1>'Hola mundo'</h1>`)
})
app.get('/', (req, res) => {
    let respuesta = { tipo: 20, msg: 'Listado de clientes' }
    res.json(respuesta);
})
app.get('/clientes/:idUser', (req, res) => {
    console.log(req.params.idUser);
    let respuesta = { tipo: 20, msg: 'Buscando un solo cliente', id: req.params.idUser }
    res.json(respuesta)
})
app.get('/productos', (req, res) => {
    let respuesta = { tipo: 20, msg: 'Devolviendo producto' }
    res.json(respuesta)

})
app.get('/productos/:idProducto', (req, res) => {
    console.log(req.params.idProducto);
    let respuesta = { tipo: 20, msg: 'Devolviendo producto' }
    res.json(respuesta)

})
app.post('/clientes', (req, res) => {
    let res = { tipo: 220, msg: 'resultado de un post' };
    res.json(res);
})*/
app.listen(3000)