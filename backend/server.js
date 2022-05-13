// Importera paket
const express = require('express')
const app = express()
const cors = require('cors')
const fruitsRouter = require('./routes/fruits.js')

// Konfiguration
const PORT = 1337
const distPath = __dirname + '/../dist/'
console.log('distpath:', distPath)

// Middleware
app.use( cors() )
app.use( express.urlencoded({ extended: true }) )
app.use( express.static(distPath) )
// Saknas: sökväg till hamster-bilderna

// Endpoints
app.use( '/fruits', fruitsRouter )
// Saknas: /hamsters, /matches


app.listen(PORT, () => {
	console.log('Server listening on port ', PORT)
})
