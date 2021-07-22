const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Admin = require('../models/admin')

const authRoute = {
		login: (_router) => {
			_router.post('/auth/login',async (req,res) => {
				let result = {};
				let status = 200;
				try{
						const {email, password} = req.body;
						Admin.findOne({email},(err, admin) => {
							if(!err && admin){
								bcrypt.compare(password, admin.password).then(match => {
									if(match){
										const payload = {admin: admin.email};
										const options = {expiresIn: '2d',issuer: 'https://cloudmall.africa'};
										const secret = process.env.JWT_SECRET;
										const token = jwt.sign(payload, secret, options)

										result.token =token;
										result.status= status;
										result.result = admin
										res.status(status).send(result)
									}
								})
							}else{
								status = 401;
								result.status = status;
								result.error='Authentication error'
							}
							res.status(status).send(result)
						})
				}catch(error){
					status = 500;
					result.status = status;
					result.error = error;
					res.status(status).send(result)
				}
			})
		}
}

module.exports = authRoute;