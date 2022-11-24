let router = require('express').Router();
let contactoController = require('../controllers/contactoController');

router.get('/', (req, res) => {
    /* let respuesta = { tipo: 20, msg: 'Listado de contactos' }
     res.json(respuesta)*/
    contactoController.listar(req, res)
})

router.get('/:id', (req, res) => {
    console.log(req.params.idcon);
    /* let respuesta = { tipo: 20, msg: 'Buscando un solo contacto', id: req.params.idcon }
     res.json(respuesta)*/
    contactoController.buscar(req, res)
})

router.post('/', (req, res) => {
    let respuesta = { tipo: 220, msg: 'resultado de un post' };
    let nombre = req.body.nombre
    let celular = req.body.celular
    let email = req.body.email
    let edad = req.body.edad
    let activo = req.body.activo
        /*if (!edad && !celular && !email && !activo && !nombre) {
            console.log(req.body);
            res.json(respuesta)

        }*/

    contactoController.crear(req, res)
        //res.json(respuesta);

})


router.delete('/:id', (req, res) => {
    contactoController.borrar(req, res)
})

























module.exports = router