const {findAll} =require('../model/movieModel')

const getAll = async (req, res) => {
    try {
        const movies = await findAll()
        res.status(200).json(movies)
    } catch (error) {
        res.sendStatus(500);
    }
}

module.exports = { getAll }