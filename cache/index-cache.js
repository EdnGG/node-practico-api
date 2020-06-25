const express = require('express')
// const bodyParser = require('body-parser')

const config = require('../config')
const router = require('./network')

const app = express()

// app.use(bodyParser.json())
app.use(express.json())

// Routes
app.use("/", router)

app.listen(config.cacheService.port, () => {
  console.log('Servicio de CACHE REDIS escuchando el en puerto', config.cacheService.port)
})