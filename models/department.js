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




//https://www.youtube.com/watch?v=70H_7C0kMbI