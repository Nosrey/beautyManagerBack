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
        let { name } = req.body
        if (name) {
            let objeto = {
                name
            }

            let existencia = await Category.findAll({ where: objeto })
            if (!existencia.length) {
                let respuesta = await Category.create(objeto)
                return res.json(respuesta)
            } else {
                throw new Error('That product already exist')
            }
        } else {
            throw new Error('The info provided is not enough');
        }
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
})


module.exports = router;