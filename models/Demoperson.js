const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const personschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

    // that is use for give the reference

    // ,
    // dept: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'department'
    // }
},
    {
        timestamps: true
    }
)

personschema.pre('save', async function (next) {
    const person = this;

    if (!person.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(person.password, salt);
        person.password = hashpassword;
        next();
    } catch (error) {
        return next(error);
    }
})


// //Change User Password
// personschema.pre('updateOne', async (req, res) => {
//     const { password, password_confirmation } = req.body
//     if (password && password_confirmation) {
//         if (password !== password_confirmation) {
//             res.send({ status: "failed", message: "password and Confirmation password does not match" });
//         } else {
//             const salt = await bcrypt.genSalt(10);
//             const newhaspassword = await bcrypt.hash(password, salt);
//             await userModel.findByIdAndUpdate(req.user._id, { $set: { password: newhaspassword } })
//             res.send({ status: "success", message: "Password Change Successfully" });
//         }
//     } else {
//         res.send({ status: "failed", message: "All feilds Are required" });
//     }
// })




personschema.methods.comparepassword = async function (candidatepassword) {
    try {
        const ismatch = await bcrypt.compare(candidatepassword, this.password);
        return ismatch;
    } catch (error) {
        throw error;
    }
}

const person = mongoose.model('personexampla', personschema);
module.exports = person;