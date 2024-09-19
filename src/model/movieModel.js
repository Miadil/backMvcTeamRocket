const db = require('./db')

const findAll = async () => {
    try{
        const [movies] = await db.query('select * from movie')
        return movies
    } catch(error){
        console.error(error)
    }
}
const findOne = async (id) => {
    const [movie] = await db.query('SELECT * FROM movie where id = ?', [id])
    return movie
}

module.exports = { findAll, findOne }