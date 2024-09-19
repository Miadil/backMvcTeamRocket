const express = require("express")

const router = express.Router()

const movieRouter = require('./movieRouter')
const userRouter = require('./userRouter')

//  http://localhost:4242/api/movie
router.use('/movie', movieRouter)
//  http://localhost:4242/api/user
router.use('/user', userRouter)

module.exports = router