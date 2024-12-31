const express = require('express');
const ProductsService = require('../services/productService');
const validatorHandler = require('../middlewares/validatorHandler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/productSchema');

const router = express.Router();
const service = new ProductsService();

//json = JavaScript Object Notation
//http://localhost:3000/products?size=2
router.get('/', async (req, res) =>{
  const products = await service.find();
  res.json(products)
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

//Los endpoints especificos deben declararsen antes de los endpoints dinamicos.
router.get('/:productID',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { productID } = req.params;
      const product = await service.findOne(productID);
      res.json(product);
    } catch(error) {
      next(error);
    }
});

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json({newProduct});
  }
);

router.put('/:id',
  validatorHandler(updateProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const { id } = req.params;
    const product = await service.update(id, body);
    res.json(product);
  }
);

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch(error) {
      next(error);
    }
  }
);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await service.delete(id);
  res.json(deletedProduct);
});

module.exports = router;
