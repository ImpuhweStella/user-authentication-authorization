//This is the main application file where you set up the Express app and connect to the database.
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.DB_CONNECTION_STRING);

app.use('/auth', authRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
