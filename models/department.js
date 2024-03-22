const mongoose = require('mongoose');

const departmentschema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

const department1 = mongoose.model('department', departmentschema);
module.exports = department1;