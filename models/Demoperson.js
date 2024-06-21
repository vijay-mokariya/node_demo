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
    },
    profile: {
        type: String,
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
