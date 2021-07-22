const bcrypt = require('bcrypt');
const Admin = require('../models/admin');

const adminRoutes = {
    getAllAdmin: (_router) => {
        _router.get('/admins', async (req, res) => {
            try {
                const allAdmin = await Admin.find();
                res.send(allAdmin);
            } catch (error) {
                console.log('error', error);
                res.status(error.status);
                res.send({ error: error });
            }
        });
    },

    getAnAdmin: (_router) => {
        _router.get('/admins/:id', async (req, res) => {
            try {
                const anAdmin = await Admin.findById({ _id: req.params.id });
                res.send(anAdmin);
            } catch (error) {
                console.log('error', error);
                res.status(error.status);
                res.send({ error: error });
            }
        });
    },

    postAnAdmin: (_router) => {
        _router.post('/admins', async (req, res) => {
            try {
                const admin = new Admin({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    phoneNumber: req.body.phoneNumber,
                    whatsappNumber: req.body.whatsappNumber,
                    userName: req.body.userName,
                    password: req.body.password,
                });
                await admin.save();
                res.send(admin);
            } catch (error) {
                console.log('error', error);
                res.status(error.status);
                res.send({ error, message: 'unable to create an admin' });
            }
        });
    },
};

module.exports = adminRoutes;
