const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler');

const app = express();
const port = 3000;

app.use(express.json()); //middleware que nos permite recibir datos por el metodo 'post'

const whiteList = ['http://localhost:8080', 'http://127.0.0.1:5500' , 'http://myapp.com'];
const options = {
  origin: (origin, callback) => {
    if(whiteList.includes(origin)){
      callback(null, true)
    } else {
      callback(new Error('no permitido'));
    }
  }
}

app.use(cors(options));

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
