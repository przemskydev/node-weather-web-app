const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
const port = 3000

// Define paths for express config
const publicDir = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewPath)
hbs.registerPartials(partialPath)

//Setup static directory to serve
app.use(express.static(publicDir))

//Routes
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Brzemeg XD'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About - Weather App',
    name: 'Brzemeg XD'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Weather app help page.',
    name: 'Brzemeg XD',
    helpText: 'Some helpful text'
  })
})

app.get('/weather', (req, res) => {

  if (!req.query.address) {
    return res.send({
      error: 'You must provide an address'
    })
  }

  geocode(req.query.address, (error, { latitude, longtitude, location } = {}) => {

    if (error) return res.send({ error })

    forecast(latitude, longtitude, (error, forecastData) => {

      if (error) return res.send({ error })
 
      res.send({
        location: location,
        address: req.query.address,
        forecast: forecastData
      })

    })

  })

  // res.send({
  //   temperature: 5,
  //   feelsLike: 2,
  //   location: req.query.address
  // })

})

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404 page not found',
    message: 'Help article not found',
    name: 'Brzemeg XD'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404 page not found',
    message: 'Page not found',
    name: 'Brzemeg XD'
  })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
