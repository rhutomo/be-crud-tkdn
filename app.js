const express = require('express')
const router = require('./router')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(router.default)

app.listen(3001, () => {
  console.log('running on port 3001')
})