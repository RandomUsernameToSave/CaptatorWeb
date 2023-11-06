const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
const port = 3000;

// Use EJS as the view engine
app.set('view engine', 'ejs');

// Use the body-parser middleware to parse JSON and URL-encoded request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route to render the form
app.get('/', (req, res) => {
  res.render('index', { numbers: [] });
});

// Handle the POST request to process the list of numbers
app.post('/process', (req, res) => {
  // Get the list of numbers from the form input
  const numbers = req.body.numbers.split(',').map(Number);

  // Perform any processing on the numbers here
  // For now, we're just rendering the same form with the entered numbers
  res.render('index', { numbers });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
