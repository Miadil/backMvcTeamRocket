const db = require('./db')

const findAll = async () => {
    try{
        const [movies] = await db.query('select * from movie')
        return movies
    } catch(error){
        console.error(error)
    }
}

module.exports = { findAll }