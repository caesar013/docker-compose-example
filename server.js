const express = require('express')
const pool = require('./db')
const port = 1337

const app = express()


app.listen(port, () => console.log(`Server has started on port: ${port}`))