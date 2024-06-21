const jwt = require('jsonwebtoken');

const jwtAuthMiddleware = (req, res, next) => {

    const authorization = req.headers.authorization;
    if (!authorization) return res.status(401).json({ error: 'Token not found' })

    //extract token from the request headers
    const token = req.headers.authorization.split(' ')[1];

    if (!token) return res.status(401).json({ error: 'Unauthorise' });

    try {
        //verify the JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // attache user information to the request object
        req.user = decoded;
        next();

    } catch (err) {
        console.error(err);
        res.status(401).json({ error: 'decodded' });
    }
}

//function to generate JWT token
const generatetoken = (userdata) => {
    return jwt.sign({ userdata }, process.env.JWT_SECRET, { expiresIn: 3000 });
}

module.exports = { jwtAuthMiddleware, generatetoken }