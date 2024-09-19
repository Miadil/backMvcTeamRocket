const express = require("express")

const router = express.Router()


const { getAll, getOne } = require('../controller/movieController')
// get http://localhost:4242/api/movie/
router.get('/', getAll)
// get http://localhost:4242/api/movie/2
router.get('/:id', getOne)
module.exports = router