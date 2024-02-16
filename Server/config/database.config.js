/**
 * database.config.js
 * @author Brynden Bielefeld (2024)
 */
const mongoose = require("mongoose");
const databaseURI = process.env.MONGODB_URI;

mongoose.connect(process.env.MONGODB_URI, {
    // Deprecated option: useNewUrlParser: true,
    // Deprecated option: useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB: ", err);
});

module.exports = mongoose.connection;