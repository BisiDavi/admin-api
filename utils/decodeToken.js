const jwt = require('jsonwebtoken');

module.exports = {
    decodeToken: (req, res, next) => {
        const authorizationHeader = req.headers?.authorization;

        if (authorizationHeader) {
            const token = authorizationHeader.split(' ')[1];
            try {
                const payload = jwt.decode(token);
                console.log('jwt.decode', jwt.decode(token));
                req.decoded = payload;
                next();
            } catch (error) {
                throw new Error(error);
            }
        } else {
            res.status(401).send('Token required');
        }
    },
};
