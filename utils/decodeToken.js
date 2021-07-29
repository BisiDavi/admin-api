const jwt = require('jsonwebtoken');

module.exports = {
    decodeToken: (req, res) => {
        const authorizationHeader = req.headers?.authorization;

        if (authorizationHeader) {
            const token = authorizationHeader.split(' ')[1];
            try {
                return jwt.decode(token);
            } catch (error) {
                throw new Error(error);
            }
        } else {
            res.status(401).send('Token required');
        }
    },
};
