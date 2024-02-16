/**
 * server.js
 * @author Brynden "devbrynden" Bielefeld (2024)
 * 
 * Serves as the entry point for the MEANecomm server.
 */

// General Dependencies
const express  = require("express");
const dotenv   = require("dotenv");
const mongoose = require("mongoose");
const routes   = require("./routes");

// Config stuff
dotenv.config(); // Run this as early as possible to ensure our environment variables are accessible within our application.
const HOST = process.env.HOST_NAME;
const PORT = process.env.HOST_PORT;
const database = require("./config/database.config");

// Middleware
const logger  = require("./middleware/logger.middleware");

let server = express();

server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(logger);
server.use(routes);

database.once("connected", () => {
    server.listen(PORT, () => {
        console.log("Server is active at %s:%d", HOST, PORT);
    });
});