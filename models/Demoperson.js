const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const personschema = mongoose.Schema({
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