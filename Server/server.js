/**
 * server.js
 * @author Brynden "devbrynden" Bielefeld (2024)
 * 
 * Serves as the entry point for the MEANecomm server.
 */

// General Dependencies
const express = require("express");
const dotenv  = require("dotenv");

// Custom Middleware
const logger  = require("./middleware/logger.middleware");

dotenv.config();

const HOST = process.env.HOST_NAME;
const PORT = process.env.HOST_PORT;

let server = express();

server.use(logger);

server.listen(PORT, () => {
    console.log("Server is active at %s:%d", HOST, PORT);
});