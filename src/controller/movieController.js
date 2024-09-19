const {findAll , findOne} =require('../model/movieModel')

const getAll = async (req, res) => {
    try {
        const movies = await findAll()
        res.status(200).json(movies)
    } catch (error) {
        res.sendStatus(500);
    }
}

const getOne = async (req,res) => {
    try {
        if(isNaN(movieId)) {
            throw new Error()
        }
        const movieId = parseInt(req.params.id, 10)
        const movie = await findOne(movieId)
        res.status(200).json(movie)
    } catch (error) {
        res.sendStatus(500);
    }
}

module.exports = { getAll, getOne }