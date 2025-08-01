const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const adminAuthRoutes = require('./routes/adminAuth');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/tnkfx?retryWrites=true&w=majority')
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error:", err));

app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/admin-auth', adminAuthRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));