const person = require('../../models/Demoperson')


const delperson = async (req, res) => {
    try {
        const { id } = req.params;
        const demodele = await person.findByIdAndDelete(id);

        if (!demodele) {
            return res.status(404).json({ message: "not found" });
        }
        res.status(200).json({ message: "person deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = delperson