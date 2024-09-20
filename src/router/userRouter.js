const express = require('express')

const router = express.Router()

const { getOne, createOne } = require('../controller/userController')
// get http://localhost:4242/api/user/2
router.get('/:id', getOne)
// post http://localhost:4242/api/user/
router.post('/', createOne)

module.exports = router