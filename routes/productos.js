let router = require('express').Router();

router.get('/', (req, res) => {
    let respuesta = { tipo: 20, msg: 'Listado de productos' }
    res.json(respuesta)
})

router.get('/', (req, res) => {
    let respuesta = { tipo: 20, msg: 'Devolviendo producto' }
    res.json(respuesta)

})
router.post('/:idProducto', (req, res) => {
    console.log(req.params.idProducto);
    let respuesta = { tipo: 20, msg: 'Devolviendo producto', id: req.params.idProducto }
    res.json(respuesta)

})
module.exports = router;
//nombre,cantidad,precio