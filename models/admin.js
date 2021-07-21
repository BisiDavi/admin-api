const mongoose = require("mongoose");
const Schema = mongoose.Schema

const AdminSchema = new Schema({
	firstName:String,
	lastName:String,
	email:String,
	phoneNumber:String,
	whatsappNumber:String,
	userName:String,
	password:String,
})

module.exports = mongoose.model('Admin', AdminSchema)