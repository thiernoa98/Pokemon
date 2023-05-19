//import mongoose
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', false); //avoid warning message

// Create a connection function
function connectToMongoDB() {

    mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => {
        console.log("MONGODB CONNECTED");
      })
      .catch((e) => {
        console.log(e);
      });
  }
  
  // Export the function
  module.exports = connectToMongoDB;