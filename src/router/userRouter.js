const express = require('express')

const router = express.Router()

const { getOne } = require('../controller/userController')
// get http://localhost:4242/api/user/2
router.get('/:id', getOne)

module.exports = router