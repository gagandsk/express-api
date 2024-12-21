const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

//json = JavaScript Object Notation
//http://localhost:3000/products?size=2
router.get('/', (req, res) =>{

  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
   products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.avatar(),
   })

  }
  res.json(products)
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

//Los endpoints especificos deben declararsen antes de los endpoints dinamicos.
router.get('/:productID', (req, res) => {
  const { productID } = req.params;
  res.json({
    productID,
    name: 'product 2',
    price: 300
  })
});

module.exports = router;
