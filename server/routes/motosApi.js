const express = require('express')
const router = express.Router()

router.get('/simpleRoute', (req, res) => {
  res.send(JSON.stringify("Here I am. Rock you like a hurricane."))
})
module.exports = router