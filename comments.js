// Ceate web server 
// 2. Create a router
// 3. Create a route
// 4. Return JSON data

// Import express
const express = require('express');

// Create a web server
const app = express();

// Create a router
const router = express.Router();

// Create a route
router.get('/', (request, response) => {
    response.json({
        message: 'Hello World'
    });
});

// Register the router
app.use('/api', router);

// Start the web server
app.listen(3000, () => {
    console.log('Web server started on port 3000');
});
