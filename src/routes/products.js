const { Router } = require('express');
const router = Router();
const { Product, Category } = require('../db')
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

// rutas post
router.post('/', async (req, res) => {
    try {
        let { name, imagen, stock, price, avaible, categoryNums } = req.body
        if (name && stock && price && categoryArr.length && (avaible !== null) && categoryNums) {
            let objeto = {
                name,
                imagen,
                stock,
                price,
                avaible
            }
            if (!objeto.imagen.length) objeto.imagen = "https://media.istockphoto.com/id/1320642367/vector/image-unavailable-icon.jpg?s=170667a&w=0&k=20&c=f3NHgpLXNEkXvbdF1CDiK4aChLtcfTrU3lnicaKsUbk="

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

// rutas put

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        let { name, imagen, stock, price, avaible } = req.body
        const producto = await Product.findByPk(id)
        if (name) producto.name = name
        if (imagen) producto.imagen = imagen
        if (stock) producto.stock = stock
        if (price) producto.price = price
        if (avaible) producto.avaible = avaible

        await producto.save();
        res.json(producto);
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

module.exports = router;