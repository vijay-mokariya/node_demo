const person = require('../../models/demo');

const display = async (req, res) => {
    try {
        const category = await person.find().populate('ref_id');
        res.status(200).json({ category: category });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = display

