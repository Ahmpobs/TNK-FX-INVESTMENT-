const router = require('express').Router();

router.post('/', (req, res) => {
  // This would send email or store in DB
  console.log("Support request:", req.body);
  res.json({ message: 'Support request received' });
});

module.exports = router;
