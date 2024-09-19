const {findOne} = require("../model/userModel")

const getOne = async (req,res) =>{
    const userId = parseInt(req.params.id, 10)
    console.log(userId);
    try {
        if(isNaN(userId)) {
            throw new Error()
        }
        const [user] = await findOne(userId)
        res.status(200).json(user)
    } catch (error) {
        res.sendStatus(500);
    }

}

module.exports = { getOne}