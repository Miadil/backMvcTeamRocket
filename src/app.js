const express = require("express")

const router = require("./router")

const app = express()

// get http://localhost:4242/
app.get("/", (req, res) => {
    res.status(200).send("je suis sur l'api 'http://localhost:4242/")
})
//  http://localhost:4242/api
app.use('/api', router)

module.exports = app