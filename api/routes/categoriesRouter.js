const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
  res.json({
    categories: [
      'Sedan',
      'SUV',
      'Hatchback',
      'Convertible',
      'Coupe',
      'Wagon',
      'Pickup Truck',
      'Van',
      'Minivan',
      'Sports Car',
      'Luxury Car',
      'Electric Car',
      'Hybrid Car',
      'Crossover',
      'Off-Road'
    ],

    luxuryCars: {
      BMW: 'Luxury Car',
      Porsche: 'Sports Car',
      'Aston Martin': 'Sports Car',
      Bentley: 'Luxury Car',
      RollsRoyce: 'Luxury Car',
      Ferrari: 'Sports Car',
      Lamborghini: 'Sports Car',
      Maserati: 'Luxury Car',
      Bugatti: 'Hypercar',
      McLaren: 'Supercar',
      Tesla: 'Electric Car'
    },
  })
});

router.get('/:categoryID/products/:productID', (req, res) => {
  const { categoryID, productID } = req.params;
  res.json({
    categoryID,
    productID
  });
});

module.exports = router;
