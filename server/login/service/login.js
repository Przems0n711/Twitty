const User = require('../../models/user');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const data = req.body;

    try {
        const user = await User.findOne({ email: data.email });

        if (!user) {
            return res.status(200).json({ success: false });
        }

        if (req.url === '/api/admin/login' && data.password === user.password && user.admin) {
            // Admin Login
            const token = jwt.sign({ email: user.email, admin: user.admin }, 'admin4123');

            return res.status(200).json({ success: true, token });
        }

        if (req.url === '/api/user/login' && data.password === user.password) {
            // User Login
            const token = jwt.sign({ email: user.email, admin: user.admin }, 'admin4123');

            return res.status(200).json({ success: true, token, email: user.email });
        }

        return res.status(401).json({ success: false });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false });
    }
};

module.exports = {
    login,
};