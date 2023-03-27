const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    try {
        const decoded = jwt.verify(token, 'admin4123');
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({success: false});
    }
};

module.exports = {
    verifyToken,
};