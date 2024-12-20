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
})

app.listen(port, () => {
  console.log('Servidor corriendo en el puerto ' + port);
});
