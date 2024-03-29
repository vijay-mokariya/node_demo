const person = require('../../models/Demoperson');
const bcrypt = require('bcrypt');

const create = async (req, res) => {
    try {
        const data = req.body;

        const newperson = new person(data);

        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(newperson.password, salt);
        newperson.password = hashpassword;

        const responce = await newperson.save();
        console.log("data saved");
        res.status(200).json(responce);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });

    }
}

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

module.exports = create;








