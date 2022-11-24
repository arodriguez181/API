let router = require('express').Router();


/*router.get('/', (req, res) => {
    res.send(`<h1>'Hola mundo'</h1>`)
})*/
router.get('/', (req, res) => {
    let respuesta = { tipo: 20, msg: 'Listado de clientes' }
    res.json(respuesta);
})
router.get('/:idUser', (req, res) => {
        console.log(req.params.idUser);
        let respuesta = { tipo: 20, msg: 'Buscando un solo cliente', id: req.params.idUser }
        res.json(respuesta)
    })
    /*app.get('/productos', (req, res) => {
        let respuesta = { tipo: 20, msg: 'Devolviendo producto' }
        res.json(respuesta)

    })
    app.get('/productos/:idProducto', (req, res) => {
        console.log(req.params.idProducto);
        let respuesta = { tipo: 20, msg: 'Devolviendo producto' }
        res.json(respuesta)

    })*/
router.post('/', (req, res) => {
    let respuesta = { tipo: 220, msg: 'resultado de un post' };

    console.log(req.body);
    res.json(respuesta);
})

module.exports = router