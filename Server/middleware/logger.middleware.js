/**
 * logger.middleware.js
 * @author Brynden "devbrynden" Bielefeld (2024)
 * 
 * Simple middleware that logs all incoming requests to the console.
 */
let logger = (req, res, next) => {
    var dateStr = (new Date()).toISOString();

    console.log(`[${dateStr}] ${req.method} ${req.url}`);

    next();
};

module.exports = logger;