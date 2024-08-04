"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = checkController;
function checkController(req, res) {
    // Example condition check (customize as needed)
    if (req.query.userId) {
        // Assuming userId is passed as a query parameter
        res.send(`Hello user with ID: ${req.query.userId}`);
    }
    else {
        res.send('Hello');
    }
}
