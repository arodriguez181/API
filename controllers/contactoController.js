let mysql = require('../db/mysql')

module.exports = {
    crear: (req, res) => {
        mysql.query(`INSERT INTO contacto (nombre,edad,celular,activo,email) VALUES('${req.body.nombre}',${req.body.edad},'${req.body.celular}','${req.body.activo}','${req.body.email}')`, (error, results, fields) => {
            if (error) {
                console.log(error)
            } else {
                for (let i = 0; i < req.body.dependientes.length; i++) {
                    mysql.query(`INSERT INTO dependiente (nombre,edad,contacto) VALUES('${req.body.dependientes[i].nombre}',${req.body.dependientes[i].edad},${results.insertId})`, (error, results, fields) => {
                        if (error)
                            console.log(error)
                        else {
                            console.log({ msg: 'insercion' });
                        }

                    })
                }

            }

        })
    },
    listar: (req, res) => {
        mysql.query('SELECT * FROM contacto', req.body, (error, results, fields) => {
            if (error) {
                res.json(error)
            } else {
                res.json(results)
            }

        })

    },
    buscar: (req, res) => {
        mysql.query('SELECT*FROM contacto WHERE id= ?', req.params.id, (results, error, fields) => {
            if (error) {
                res.json(error)
            } else {
                res.json(results)
            }
        })
    },

    borrar: (req, res) => {
        mysql.query('DELETE FROM contacto WHERE id= ?', req.params.id, (results, error, fields) => {
            if (error) {
                res.json(error)
            } else {
                res.json(results + 'Se elimino correctamente')
            }
        })
    }
}