const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Register
router.post('/register', async (req, res) => {
  const { name, email, password, referredBy } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const referralCode = Math.random().toString(36).substring(2, 8);
  const user = new User({ name, email, password: hashed, referredBy, referralCode });
  await user.save();
  res.json({ message: 'User registered', referralCode });
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && await bcrypt.compare(password, user.password)) {
    res.json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
