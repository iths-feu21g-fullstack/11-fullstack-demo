// Importera paket
const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const fruitsRouter = require('./routes/fruits.js')

// Konfiguration
const PORT = process.env.PORT || 1337
const distPath = path.join(__dirname, '/../dist/')
console.log('distpath:', distPath)

// Middleware
// Saknas: logger middleware
app.use( cors() )
app.use( express.urlencoded({ extended: true }) )

// '/' -> dist/index.html'
app.use( express.static(distPath) ) 
// '/img/hamster-14.jpg' -> './hamsterImages/hamster-14.jpg'
app.use('/img', express.static(path.join(__dirname, '/hamsterImages/')) )

// Endpoints
app.use( '/fruits', fruitsRouter )
// Saknas: /hamsters, /matches


app.listen(PORT, () => {
	console.log('Server listening on port ', PORT)
})
