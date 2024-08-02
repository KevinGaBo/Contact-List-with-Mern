const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');
const app = express();

// configuracion:

app.set('port', process.env.PORT || 4000)

//middlewares

app.use(cors())
app.use(express.json())

// Rutas

app.get('/', (req, res) => {
    res.send('Bienvenido a mi API rest full')
})

module.exports = app