const mongoose = require('mongoose');

//evnironment loading .env file into process.env ojbect
require('dotenv').config();

//fetch data from mongoose
const connectionStr = process.env.MONGODB_URI;

mongoose.connect(connectionStr);

mongoose.connection.on('connected', () => {
    console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected ... 🙌 🙌 🙌`); 
  });
  
mongoose.connection.on('error', (error) => {
    console.log('MongoDB connection error 😥', error);
  });
  
mongoose.connection.on('disconnected', () => console.log('MongoDB disconnected  ⚡️ 🔌 ⚡️'));
  // Connection Error/Success
