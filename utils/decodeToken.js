const jwt = require('jsonwebtoken');

module.exports = {
    decodeToken: (req, res, next) => {
        const authorizationHeader = req.headers?.authorization;

        if (authorizationHeader) {
            const token = authorizationHeader.split(' ')[1];
            try {
                console.log('jwt.decode', jwt.decode(token));
                next();
                return jwt.decode(token);
            } catch (error) {
                throw new Error(error);
            }
        } else {
            res.status(401).send('Token required');
        }
    },
};
