const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler');

const app = express();
const port = 3000;

app.use(express.json()); //middleware que nos permite recibir datos por el metodo 'post'

app.get('/', (req, res) => {
  res.send('Hola, mi primer server con express');
})

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log('Servidor corriendo en el puerto ' + port);
});
