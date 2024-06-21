const person = require('../../models/item');

const display = async (req, res, next) => {
    try {
        const data = await person.find().populate('category', 'category -_id')

        console.log("data saved");
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = display



// 