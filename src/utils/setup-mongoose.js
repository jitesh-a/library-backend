require('dotenv').config();
const mongoose = require('mongoose');
const { DB_USER, DB_PASS } = process.env;

const URI = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.b9fwu.mongodb.net/test?retryWrites=true&w=majority`;

const setupMongoose = () => {
  mongoose.connect(URI, { useNewUrlParser: true, useFindAndModify: false });
  const connection = mongoose.connection;
  connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
    // connection.close();
  });
}

module.exports = setupMongoose;