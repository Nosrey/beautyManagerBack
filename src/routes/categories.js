const { Router } = require('express');
const router = Router();
const { Category } = require('../db')
require('dotenv').config();



// rutas get
router.get('/', async (req, res) => {
    try {
        let categorias = await Category.findAll();
        return res.json(categorias)
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
})



// rutas post
router.post('/', async (req, res) => {
    try {
        let { arr } = req.body
        let = mensaje = 'hola'
        if (arr) {
            arr.map(async (el) => {
                el = el.toUpperCase(); // para ponerlo en Mayuscula
                let objeto = {
                    name: el
                }

                let existencia = await Category.findAll({ where: objeto })
                if (!existencia.length) {
                    await Category.create(objeto)
                } else {
                    console.log('entre')
                    mensaje = 'adios'
                }
            })

            return res.json(mensaje)
        }
        else {
            throw new Error('The info provided is not enough');
        }
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
)


module.exports = router;