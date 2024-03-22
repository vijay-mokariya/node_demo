const person = require('../../models/Demoperson')

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const demoupda = await person.findByIdAndUpdate(id, req.body);

        if (!demoupda) {
            return res.status(404).json({ message: "not found" });
        }
        const updatedemo = await person.findById(id);
        res.status(200).json(updatedemo);

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = update