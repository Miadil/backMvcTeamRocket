const {findOne, addOne } = require("../model/userModel")
const validateUser = require('../validator/userValidator')
const { hashPassword } = require('../helper/argonHelper')

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

const createOne = async (req,res) => {
    const newUser = req.body
    // console.log('je suis sur la route createone', newUser)
    const errors = validateUser(newUser)
    if(errors){
        return res.status(401).send(errors)
    }
    // hash le mdp
    const hashedPassword = await hashPassword(newUser.pass)
    // console.log({...newUser, pass: hashedPassword});
    const result = await addOne({...newUser, pass: hashedPassword})
    res.status(201).send(result)
}

module.exports = { getOne, createOne}