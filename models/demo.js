const mongoose = require('mongoose');

const demo = mongoose.Schema({
    category: {
        type: String,
        require: true
    },
    ref_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'demo'
    }
},
    {
        timestamps: true
    }
);

demo.pre('find', function () {
    this.populate('ref_id');    
});

const demoo = mongoose.model('demo', demo);
module.exports = demoo;


