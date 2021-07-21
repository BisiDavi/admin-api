const mongoose = require("mongoose");
const Schema = mongoose.Schema

const OrdersSchema = new Schema({
	pickupVendor:String,
	pickupContact:String,
	pickupDescription:String,
	deliveryDetails:[
		{

		}
	],
	note:String,
	:String,
	adnumberOfDeliveriesmin:String
})

module.exports = mongoose.model('Orders', OrdersSchema)
