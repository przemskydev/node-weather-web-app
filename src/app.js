const path = require('path')
const express = require('express')

const app = express()
const port = 3000

// Define paths for express config
const publicDir = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates')

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewPath)

//Setup static directory to serve
app.use(express.static(publicDir))

//Routes
app.get('/', (req,res)=>{
  res.render('index', {
    title: 'Weather App',
    name: 'Brzemeg XD'
  })
})

app.get('/about', (req,res)=>{
  res.render('about', {
    title: 'Weather App',
    name: 'Brzemeg XD'
  })
})

app.get('/help', (req,res)=>{
  res.render('help', {
    title: 'Weather app help page.',
    name: 'Brzemeg XD'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    temperature: 5,
    feelsLike: 2,
    location: 'Lublin'
  })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
