const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// Creation of the express server
const app = express();
const port = process.env.PORT || 5000;

// Setting up the middleware
app.use(cors());
app.use(express.json());

// Create the MongoDB database connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

const exerciseRouter = require('./apiRoutes/exerciseApiRoute');
const userRouter = require('./apiRoutes/userApiRoute');

app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);

// Initializing the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})