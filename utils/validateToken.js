const jwt = require('jsonwebtoken');

module.exports = {
    validateToken: (req, res, next) => {
        const authorizationHeader = req.headers.authorization;
        console.log('authorizationHeader', authorizationHeader);
        let result;
        if (
            req.headers.authorization &&
            req.headers.authorization.split(' ')[0] === 'Bearer'
        ) {
            const token = req.headers.authorization.split(' ')[1];
            const options = {
                expiresIn: '2d',
                issuer: 'https://cloudmall.africa',
            };
            try {
                result = jwt.verify(token, process.env.JWT_SECRET, options);
                req.decoded = result;
                next();
            } catch (error) {
                console.log('error', error);
                throw new Error(error);
            }
        } else {
            result = {
                error: `Authentication error, Token required`,
                status: 401,
            };
            res.status(401).send(result);
        }
    },
};
