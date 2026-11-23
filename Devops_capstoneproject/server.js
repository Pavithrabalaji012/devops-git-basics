
const express = require('express');

const app = express();
const PORT = 3000;

// Home route
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to My DevOps Capstone Project!</h1>
        <h2>Node.js + Express Application</h2>
        <p>Successfully deployed application.</p>
        <p>CI/CD Pipeline using Jenkins and Docker.</p>
    `);
});

// Health check route
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'UP',
        application: 'Node.js DevOps Capstone',
        message: 'Application is healthy'
    });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
