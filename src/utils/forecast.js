const { key } = require('../key')
const request = require('request')

const forecast = (lat, long, callback) => {

  const url = `http://api.weatherstack.com/current?access_key=${key}&query=${lat},${long}`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connection to weather server', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      const { temperature, feelslike, weather_descriptions, wind_speed, wind_dir, pressure } = body.current
      callback(undefined, `${weather_descriptions}. It is currently ${temperature} degrees out. 
      It feels like ${feelslike} degrees out. 
      Wind speed is ${wind_speed} from ${wind_dir} direction.
      Pressure ${pressure}`)
      // callback(undefined, { temperature, feelslike, weather_descriptions })
    }

  })

}

module.exports = forecast