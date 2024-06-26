// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// Simple login route
app.post('/v00/06052024/login', (req, res) => {
  const { username, password } = req.body;
  console.log('Received login request:', { username, password });

  // Dummy validation (replace with your actual validation logic)
  if (username === 'admin' && password === 'password') {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.post('/v00/06052024/subscribe', (req, res) => {
  const { email } = req.body;
  console.log('Received subscription request:', { email });

  // Perform your subscription logic here (e.g., save to database)
  
  // Send a success response
  res.json({ success: true, message: 'Subscription successful' });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
