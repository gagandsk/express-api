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
  res.json({
    name: 'product 1',
    price: 200
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

app.listen(port, () => {
  console.log('Servidor corriendo en el puerto ' + port);
});
