// server.js
const express = require('express');
const app = express();
const path = require('path');

const PORT = 5522; // Choose any available port

app.use(express.static(path.join(__dirname)));

// Define a route to handle the prefix URL
app.get('/:prefix', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
