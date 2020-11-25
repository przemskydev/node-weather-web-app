const path = require('path')
const express = require('express')

const app = express()
const port = 3000
const publicDir = path.join(__dirname, '../public')

app.use(express.static(publicDir))

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
