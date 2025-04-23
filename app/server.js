// server.js
const express = require('express');
const bcrypt = require('bcrypt');
const app = express();

app.use(express.json());

// Replace this with your actual hashed password
const hashedPassword = '$2a$12$2pC3zAbMYRA.E.SWbuIL6.WPXQNrP2C2a6sf4HtQl/rNJxFuv71ai'; // Example hash

app.post('/api/login', async (req, res) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: 'Password required' });
  }

  try {
    const match = await bcrypt.compare(password, hashedPassword);
    if (match) {
      res.json({ token: 'authenticated' });
    } else {
      res.status(401).json({ message: 'Incorrect password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
