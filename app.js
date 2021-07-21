const express = require('express');
const mongoose = require("mongoose")

const app = express();

const PORT = process.env.PORT || 5000;

mongoose.connect("", {useNewUrlParser:true})
.then(() => {
	console.log('mongoose is connected!')
})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})