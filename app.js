const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./json/swagger.json')

const appRoutes = require('./controllers/routes');

dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('mongoose is connected!');
    })
    .catch((error) => {
        console.log('error', error);
    });

app.get('/', (req, res) => {
    res.send('Welcome to Instadrop Admin Api');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/v1/', appRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
