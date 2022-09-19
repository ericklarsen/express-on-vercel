// Add Express
const express = require('express');

// Initialize Express
const app = express();

// Create GET Request
app.get('/', (req, res) => {
    res.json({ message: 'Express on vercel' });
});

// Initialize Server
app.listen(5000, () => {
    console.log('Running on port 5000');
});

// Export the Express API
module.exports = app;