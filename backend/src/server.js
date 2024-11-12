const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database'); // Import sequelize instance
const jsonMiddleware = require('./middleware/jsonMiddleware');  // Import JSON middleware
const authenticate = require('./middleware/authMiddleware');    // Import auth middleware

const app = express();

app.use(bodyParser.json());
app.use(jsonMiddleware);

// Import routes and models
const authRoutes = require('./routes/auth');

// Define your public API routes (no authentication required)
app.use('/api', authRoutes);

// Define protected routes (require authentication)
app.use('/api/protected', authenticate, (req, res) => {
    res.json({ message: "This is a protected route" });
});

// Server runs on the specified port
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
