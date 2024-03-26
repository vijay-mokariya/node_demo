const mongoose = require('mongoose');

// const mongourl = 'mongodb://localhost:27017/demo';

// async function
// async function vijay() {
//     try{} catch(error) {console}
// }
mongoose.connect(process.env.MONGO_URL)
// module.exports = db;

const db = mongoose.connection;

db.on('connected', () => {
    console.log('connected');
});

module.exports = db;