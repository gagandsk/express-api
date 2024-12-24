const express = require('express');
const ProductsService = require('../services/productService');

const router = express.Router();
const service = new ProductsService();

//json = JavaScript Object Notation
//http://localhost:3000/products?size=2
router.get('/', (req, res) =>{
  const products = service.find();
  res.json(products)
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

//Los endpoints especificos deben declararsen antes de los endpoints dinamicos.
router.get('/:productID', (req, res) => {
  const { productID } = req.params;
  const product = service.findOne(productID);
  res.json(product);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json({newProduct});
});

router.put('/:id', (req, res) => {
  const body = req.body;
  const { id } = req.params;
  const product = service.update(id, body);
  res.json(product);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.json(product);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deletedProduct = service.delete(id);
  res.json(deletedProduct);
});

module.exports = router;
