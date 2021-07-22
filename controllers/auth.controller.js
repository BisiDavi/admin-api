const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/admin.model');
const SuperAdmin = require('../models/superAdmin.model');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const checkEmail = await Admin.findOne({ email });

        if (checkEmail !== null && email === checkEmail?.email) {
            let result = {};
            await Admin.findOne({ email }, (err, admin) => {
                console.log('admin', admin);
                if (!err && admin) {
                    bcrypt.compare(password, admin.password).then((match) => {
                        if (match) {
                            const payload = {
                                admin: admin.email,
                                message: 'logged in as an admin',
                            };
                            const options = {
                                expiresIn: '2d',
                                issuer: 'https://cloudmall.africa',
                            };
                            const secret = process.env.JWT_SECRET;
                            const token = jwt.sign(payload, secret, options);
                            console.log('admin token', token);
                            console.log('super admin result', result);
                            result.token = token;
                            result.status = status;
                            result.data = admin;
                            res.status(status).send(result);
                        }
                    });
                } else {
                    result.error = 'Authentication error as an admin';
                    res.send(err);
                }
            });
        } else {
            let result = {};
            await SuperAdmin.findOne({ email }, (err, superAdmin) => {
                console.log('superAdmin', superAdmin);
                if (!err && superAdmin) {
                    bcrypt
                        .compare(password, superAdmin.password)
                        .then((match) => {
                            if (match) {
                                const payload = {
                                    superAdmin: superAdmin.email,
                                    message: 'logged in as super admin',
                                };
                                const options = {
                                    expiresIn: '2d',
                                    issuer: 'https://cloudmall.africa',
                                };
                                const secret = process.env.JWT_SECRET;
                                const token = jwt.sign(
                                    payload,
                                    secret,
                                    options,
                                );
                                console.log('super-admin token', token);
                                result.token = token;
                                result.data = superAdmin;
                                console.log('super admin result', result);
                                res.send(result);
                            }
                        });
                } else {
                    result.message = 'Authentication error as a super admin';
                    result.error = err;
                    res.send(result);
                }
            });
        }
    } catch (error) {
        console.log('error', error);
        res.status(status).send(error);
    }
};
