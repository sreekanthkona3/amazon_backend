require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors({
  origin: '*', // For testing. Later change to your frontend URL
}));
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: "Amazon Backend API is running", status: "ok" });
});

// Your API - static data example
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Priya", age: 28 }
  ]);
});

// Health check for Amplify
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

const PORT = process.env.PORT || 3000;

// IMPORTANT: 0.0.0.0 is required for Amplify
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});