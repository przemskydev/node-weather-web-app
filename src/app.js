const path = require('path')
const express = require('express')
// const hbs = require('hbs')

const app = express()
const port = 3000
const publicDir = path.join(__dirname, '../public')

app.set('view engine', 'hbs');
app.use(express.static(publicDir))

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
