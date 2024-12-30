const express = require('express')
const app = express()
const Controller = require('./controllers/controller')
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) //for parsing

app.get('/cars', Controller.getCars)
app.get('/orders', Controller.getOrders)
app.post('/cars', Controller.createCar)
app.put('/cars/:id', Controller.updateCar)
app.delete('/cars/:id', Controller.deleteCar)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})