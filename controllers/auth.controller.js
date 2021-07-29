const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/admin.model');
const Dispatcher = require('../models/dispatcher.model');
const SuperAdmin = require('../models/superAdmin.model');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const isAdmin = await Admin.findOne({ email });
        const isSuperAdmin = await SuperAdmin.findOne({ email });
        const isDispatcher = await Dispatcher.findOne({ email });

        let result = {};
        if (
            isAdmin !== null &&
            isSuperAdmin === null &&
            email === isAdmin?.email
        ) {
            await Admin.findOne({ email }, (err, admin) => {
                if (!err && admin) {
                    bcrypt.compare(password, admin.password).then((match) => {
                        if (match) {
                            const payload = {
                                email: admin.email,
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
                            result.message = 'logged in as an admin';
                            result.data = admin;
                            res.send(result);
                        }
                    });
                } else {
                    result.error = 'Authentication error as an admin';
                    res.send(err);
                }
            });
        } else if (
            isAdmin === null &&
            isSuperAdmin === null &&
            isDispatcher !== null
        ) {
            await Dispatcher.findOne({ email }, (err, dispatcher) => {
                if (!err && dispatcher) {
                    bcrypt
                        .compare(password, dispatcher.password)
                        .then((match) => {
                            if (match) {
                                const payload = {
                                    email: dispatcher.email,
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
                                console.log('admin token', token);
                                console.log('super admin result', result);
                                result.message = 'logged in as a dispatcher';
                                result.token = token;
                                result.data = dispatcher;
                                res.send(result);
                            }
                        });
                } else {
                    result.error = 'Authentication error as an admin';
                    res.send(err);
                }
            });
        } else {
            await SuperAdmin.findOne({ email }, (err, superAdmin) => {
                if (!err && superAdmin) {
                    bcrypt
                        .compare(password, superAdmin.password)
                        .then((match) => {
                            if (match) {
                                const payload = {
                                    email: superAdmin.email,
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
                    result.message = 'An error just occured';
                    result.error = err;
                    res.send(result);
                }
            });
        }
    } catch (error) {
        console.log('error', error);
        res.send(error);
    }
};
