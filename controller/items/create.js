const person = require('../../models/item');

const create = async (req, res) => {
    try {
        const data = req.body;

        const newperson = new person(data);

        const responce = await newperson.save();
        console.log("data saved");

        res.status(200).json(responce);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });

    }
}
module.exports = create;

