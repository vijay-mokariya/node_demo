const person = require('../../models/Demoperson')

const displayper = async (req, res) => {
    try {
        const { id } = req.params;
        const demoserch = await person.findById(id);
        res.status(200).json(demoserch);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = displayper