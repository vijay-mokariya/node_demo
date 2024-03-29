const person = require('../../models/Demoperson')
const bcrypt = require('bcrypt');

const update = async (req, res) => {

    try {
        const { id } = req.params;

        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashpassword;
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


// $2b$10$/f5w9TuumPoesTQpb1WPE.zkrX6jHyKZ/f4zUCuDEJFNQuSw4f5oK
//$2b$10$Hc2E/ExxhA7/JhmJrZS0q.9Sdb1l9Z5mA77WvAowmS21iA1rvfYXa


// personschema.pre('updateOne', async (req, res) => {
//     const { password, password_confirmation } = req.body
//     if (password && password_confirmation) {
//         if (password !== password_confirmation) {
//             res.send({ status: "failed", message: "password and Confirmation password does not match" });
//         } else {
//             const salt = await bcrypt.genSalt(10);
//             const newhaspassword = await bcrypt.hash(password, salt);
//             await userModel.findByIdAndUpdate(req.user._id, { $set: { password: newhaspassword } })
//             res.send({ status: "success", message: "Password Change Successfully" });
//         }
//     } else {
//         res.send({ status: "failed", message: "All feilds Are required" });
//     }
// })
module.exports = update
