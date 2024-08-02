const userCtrl = {}

const User = require('../models/UserModel')

userCtrl.getUs = async(req, res) => {
    const user = await User.find()
    res.json(user)
}
userCtrl.createdUs = async(req, res) => {
    const {name, lastName, age, email, phone} = req.body;
    const newUs = new User({
        name: name,
        lastname: lastName,
        age: age,
        email: email,
        phone: phone
    })
    await newUs.save();
    res.json({message: "El usuario ha sido creado y guardado correctamente"})
}
userCtrl.getUs = async(req, res) => {
    
}
userCtrl.getUs = async(req, res) => {
    
}
userCtrl.getUs = async(req, res) => {
    
}