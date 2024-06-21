const mongoose = require('mongoose');

const item = mongoose.Schema({
    item_name: {
        type: String,
        require: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'demo'
    }
},
    {
        timestamps: true
    }
);

const items = mongoose.model('item', item);
module.exports = items;


//agregate pipeline 