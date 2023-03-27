const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ success: false, message: 'Authentication failed. Token missing.' });
    }

    try {
        jwt.verify(token, 'admin4123');
        next();
    } catch (error) {
        return res.status(403).json({ success: false, message: 'Authentication failed. Invalid token.' });
    }
};

module.exports = {
    verifyToken,
};