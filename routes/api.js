let router = require('express').Router();
let clientes = require('./clientes');
router.use('/clientes', clientes)

let productos = require('./productos');
router.use('/productos', productos)

let contacto = require('./contactos');
router.use('/contactos', contacto)


router.get('/', (req, res) => {
    res.status(200).json({ tipo: 200, msg: 'Conectado API' })
})

module.exports = router;