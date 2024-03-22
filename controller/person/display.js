const person = require('../../models/Demoperson')

const display = async (req, res, next) => {
    try {
        const data = await person.find();

        console.log("data saved");
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = display