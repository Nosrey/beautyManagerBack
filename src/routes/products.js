const { Router } = require('express');
const router = Router();
const { Product } = require('../db')
require('dotenv').config();



// rutas get
router.get('/', async (req, res) => {
    try {
        let productos = await Product.findAll();
        return res.json(productos)
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        let { id } = req.params
        let productos = await Product.findAll({ where: { id: id } });
        return res.json(productos)
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        let { name, imagen, stock, price, avaible } = req.body
        if (name && imagen && stock && price && (avaible !== null)) {
            let objeto = {
                name,
                imagen,
                stock,
                price,
                avaible
            }
            let existencia = await Product.findAll({ where: objeto })
            if (!existencia.length) {
                let respuesta = await Product.create(objeto)
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