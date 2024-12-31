const express = require('express');
const cors = require('cors');
const path = require('path');
const routerApi = require('../api/routes');

const { logErrors, errorHandler, boomErrorHandler } = require('../api/middlewares/errorHandler');

const app = express();
const port = 3000;

app.use(express.json()); //middleware que nos permite recibir datos por el metodo 'post'

const whiteList = ['http://localhost:8080', 'http://127.0.0.1:5500', 'http://localhost:3000', 'http://myapp.com'];
const options = {
  origin: (origin, callback) => {
    // Si no hay origin (por ejemplo, desde Postman) o está en la whiteList, permitir
    if (!origin || whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
};

app.use(cors(options));

app.get('/api', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log('Servidor corriendo en el puerto ' + port);
});
