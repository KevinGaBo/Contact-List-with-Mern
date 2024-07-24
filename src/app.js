const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

// configuracion:

app.set('port', process.env.PORT || 4000)

module.exports = app