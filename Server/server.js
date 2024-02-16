/**
 * server.js
 * @author Brynden "devbrynden" Bielefeld (2024)
 * 
 * Serves as the entry point for the MEANecomm server.
 */
const express = require("express");
const dotenv  = require("dotenv");

dotenv.config();

const HOST = process.env.HOST_NAME;
const PORT = process.env.HOST_PORT;

let server = express();

server.listen(PORT, () => {
    console.log("Server is active at %s:%d", HOST, PORT);
});