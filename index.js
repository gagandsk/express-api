const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json()); //middleware que nos permite recibir datos por el metodo 'post'
routerApi(app);

app.get('/', (req, res) => {
  res.send('Hola, mi primer server con express');
})

app.listen(port, () => {
  console.log('Servidor corriendo en el puerto ' + port);
});
