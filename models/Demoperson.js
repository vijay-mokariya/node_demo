const mongoose = require('mongoose');

const personschema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
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

const person = mongoose.model('personexampla', personschema);
module.exports = person;