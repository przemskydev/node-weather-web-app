console.log('client side js')


fetch('http://localhost:3000/weather?address=Lublin')
  .then((response) => {
    response.json()
      .then((data) => {
        if (data.error) return console.log(data.error)
        console.log(data.location)
        console.log(data.forecast)
      })
  })


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e)=>{
  e.preventDefault()

  const location = search.value

  console.log(location)
})

