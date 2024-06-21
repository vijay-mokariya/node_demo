const person = require('../../models/Demoperson');
const { jwtAuthMiddleware, generatetoken } = require('../../jwt');

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await person.findOne({ username: username });

        if (!user || !(await user.comparepassword(password))) {
            return res.status(401).json({ error: "invalid username and password" });
        }

        const payload = {
            username: user.username
        }

        const token = generatetoken(payload);

        res.json({ token })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = login;