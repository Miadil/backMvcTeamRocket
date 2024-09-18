const express = require("express")

const router = express.Router()


const { getAll } = require('../controller/movieController')
// get http://localhost:4242/api/movie/
router.get('/', getAll)

module.exports = router