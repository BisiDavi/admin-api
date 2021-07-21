const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const appRoutes = require('./controllers/routes');

dotenv.config();
const app = express();

app.use(cors);

app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGODB_URL, { useNewUrlParser: true })
    .then(() => {
        console.log('mongoose is connected!');
    });

app.use('/api', appRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
