const mongoose = require("mongoose");
const Schema = mongoose.Schema

const DispatcherSchema = new Schema({
	firstName:String,
	lastName:String,
	email:String,
	phoneNumber:String,
	whatsappNumber:String,
	userName:String,
	password:String,
	fleetBrand:String,
	fleetModel:String,
	fleetColor:String,
	fleetPlateNumber:String,
	fleetOwner:String
})

module.exports = mongoose.model('Dispatcher', DispatcherSchema)