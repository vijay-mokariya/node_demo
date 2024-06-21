const person = require('../../models/Demoperson');
const bcrypt = require('bcrypt');
const { jwtAuthMiddleware, generatetoken } = require('../../jwt');

const create = async (req, res) => {
    try {
        const data = req.body;
        //const newperson = new person(data);
        console.log(data.password)
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(req.body.password, salt);
        const newperson = new person({
            name: req.body.name,
            age: req.body.age,
            username: req.body.username,
            password: hashpassword,
            profile: req.file.filename
        })
        // const responce = await registerUser.save();
        //newperson.password = hashpassword;
        const responce = await newperson.save();
        console.log("data saved");
        res.status(200).json(responce);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
module.exports = create;








// hashing password store using pre command


// personschema.pre('save', async function (next) {
//     const person = this;

//     if (!person.isModified('password')) return next();
//     try {
//         const salt = await bcrypt.genSalt(10);
//         const hashpassword = await bcrypt.hash(person.password, salt);
//         person.password = hashpassword;
//         next();
//     } catch (error) {
//         return next(error);
//     }
// })














//  const registered = await User.create({ ...req.body, profileimage: req.file.filename, password: hashPassword });

