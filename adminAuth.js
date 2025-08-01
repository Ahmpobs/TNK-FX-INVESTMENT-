const router = require('express').Router();

// Simple hardcoded admin login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === 'admin@tnkfx.com' && password === 'admin123') {
    res.json({ message: 'Admin login successful', token: 'admin-token' });
  } else {
    res.status(401).json({ message: 'Invalid admin credentials' });
  }
});

module.exports = router;
