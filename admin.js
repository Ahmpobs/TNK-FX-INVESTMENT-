const router = require('express').Router();
const User = require('../models/User');

// View all users
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Update balance
router.post('/update-balance', async (req, res) => {
  const { email, balance } = req.body;
  await User.updateOne({ email }, { $set: { balance } });
  res.json({ message: 'Balance updated' });
});

module.exports = router;
