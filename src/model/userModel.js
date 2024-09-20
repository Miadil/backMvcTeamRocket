const db = require('./db')

const findOne = async (id) =>{
    const [user] = await db.query('SELECT * FROM user where id = ?', [id])
    return user
}

const addOne = async (user) => {
    const { name, email, pass } = user
    const [result] = await db.query('INSERT INTO `user` (`name`, `email`, `password`) VALUES (?, ?, ?)', [name, email, pass])
    return {id: result.insertId, name, email}
}

module.exports = {findOne, addOne}