const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola, mi primer server con express');
})

app.get('/example', (req, res) =>{
  res.send('example')
})

//json = JavaScript Object Notation
app.get('/products', (req, res) =>{
  res.json([
    {
      name: 'product 1',
      price: 200
    },
    {
      name: 'product 2',
      price: 300
    }
  ])
});

app.get('/products/:productID', (req, res) => {
  const { productID } = req.params;
  res.json({
    productID,
    name: 'product 2',
    price: 300
  })
});

app.get('/categories', (req, res) => {
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

app.get('/categories/:categoryID/products/:productID', (req, res) => {
  const { categoryID, productID } = req.params;
  res.json({
    categoryID,
    productID
  });
});

app.get('/tasks/:id', (req, res) => {

  const { id } = req.params;
  res.json([
    {
      id: id,
      name: 'create',
      type: 'something'
    },
    {
      id: id,
      name: 'read',
      type: 'something'
    },
    {
      id: id,
      name: 'update',
      type: 'something'
    },
    {
      id: id,
      name: 'delete',
      type: 'something'
    }
  ])
});

app.get('/characters', (req, res) => {
  res.json([
    {
      name: 'goku',
      power: '60.000.000'
    },
    {
      name: 'vegeta',
      power: '54.000.000'
    },
    {
      name: 'Piccolo',
      power: '2.000.000'
    },
    {
      name: 'Gohan',
      power: '45.000.000'
    }
  ])
});

app.get('/characters/:id', (req, res) => {

  const { id } = req.params;

  res.json({
    id,
    name: 'Gohan',
    power: '45.000.000'
  });

})

app.listen(port, () => {
  console.log('Servidor corriendo en el puerto ' + port);
});
