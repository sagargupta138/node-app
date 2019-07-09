// Import modules
const express = require('express');
const fs = require('fs');

// Create router
const router = express.Router();

// Create app instance
const app = express();

app.use('/static', express.static('dist'));

// Add routes in the router
router.get('/', (req, res) => {
  res.send('<h1>Welcome</h1>');
});

router.get('/home', (req, res) => {
  res.send('<h1>Welcome</h1>');
});

router.get('/user/:id', (req, res) => {
  res.send(`<h1>Hello User ${req.params.id}</h1>`);
});

router.get('/contact', (req, res) => {
  res.send('<h1>Contact us</h1>');
});

router.get('/index', (req, res) => {
  res.end(fs.readFileSync('./dist/index.html'));
});

// Attach router to app
app.use('/', router);

// Listen for connections
const port = 3000;
app.listen(port, () => {
  console.info('Server started at', port);
});