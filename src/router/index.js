const express = require("express")

const router = express.Router()

const movieRouter = require('./movieRouter')

//  http://localhost:4242/api/movie
router.use('/movie', movieRouter)
// router.use('/user', userRouter)

module.exports = router