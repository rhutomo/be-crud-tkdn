const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

var dummy = [
  {id: 1, name: 'tomo', email: 'tomo@test.com', password: '1234', gender: 'male', is_married: true, address: 'jalan kaki'},
  {id: 2, name: 'tomi', email: 'tomi@test.com', password: '1234', gender: 'male', is_married: false, address: 'jalan sehat'},
  {id: 3, name: 'toma', email: 'toma@test.com', password: '1234', gender: 'male', is_married: true, address: 'jalan ujung'},
  {id: 4, name: 'tomu', email: 'tomu@test.com', password: '1234', gender: 'male', is_married: false, address: 'jalan baru'},
  {id: 5, name: 'tome', email: 'tome@test.com', password: '1234', gender: 'male', is_married: true, address: 'jalan santai'},
]

router.get('/customer', jsonParser, (req, res) => {
  return res.json({
    status: {
      code: 200,
      response: 'success',
      message: 'success get all customer data'
    },
    result: {
      data: [
        {id: 1, name: 'tomo', email: 'tomo@test.com', password: '1234', gender: 'male', is_married: true, address: 'jalan kaki'},
        {id: 2, name: 'tomi', email: 'tomi@test.com', password: '1234', gender: 'male', is_married: false, address: 'jalan sehat'},
        {id: 3, name: 'toma', email: 'toma@test.com', password: '1234', gender: 'male', is_married: true, address: 'jalan ujung'},
        {id: 4, name: 'tomu', email: 'tomu@test.com', password: '1234', gender: 'male', is_married: false, address: 'jalan baru'},
        {id: 5, name: 'tome', email: 'tome@test.com', password: '1234', gender: 'male', is_married: true, address: 'jalan santai'},
      ]
    }
  })
})

router.get('/customer/:ID', jsonParser, (req, res) => {
  console.log('get by id')
  return res.json({
    status: {
      code: 200,
      response: 'success',
      message: 'success get customer with id: ' + req.params.ID
    },
    result: {
      data: dummy.find((el) => el.id == parseInt(req.params.ID))
    }
  })
})

router.put('/customer/:ID', jsonParser, (req, res) => {
  console.log('put')
  return res.json({
    status: {
      code: 200,
      response: 'success',
      message: 'success update customer with id: ' + req.params.ID
    },
    result: {
      data: req.body
    }
  })
})

router.delete('/customer/:ID', jsonParser, (req, res) => {
  console.log('delete')
  return res.json({
    status: {
      code: 200,
      response: 'success',
      message: 'success remove customer with id: ' + req.params.ID
    },
    result:  {}
  })
})

router.post('/customer', jsonParser, (req, res) => {
  console.log('post')
  return res.json({
    status: {
      code: 200,
      response: 'success',
      message: 'success create new customer'
    },
    result:  {
      data: req.body
    }
  })
})

module.exports = { default: router };