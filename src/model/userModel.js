const db = require('./db')

const findOne = async (id) =>{
    const [user] = await db.query('SELECT * FROM user where id = ?', [id])
    return user
}

module.exports = {findOne}