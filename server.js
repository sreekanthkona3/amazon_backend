require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Allow your Vite frontend
app.use(cors({
  origin: 'http://localhost:5173', // your Vite URL
}));

app.get('/api/users', (req, res) => {
  res.json([
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Priya", age: 28 },
  { id: 3, name: "Amit", age: 22 }
]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API on ${PORT}`));