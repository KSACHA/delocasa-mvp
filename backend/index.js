const express = require('express');
const app = express();
app.use(express.json());

const userRoutes = require('./routes/user');
app.use('/api', userRoutes);

const deloStatusRoutes = require('./routes/deloStatus'); // 👈 filename is camelCase
app.use('/api', deloStatusRoutes);

const PORT = 5001;

app.get('/api/ping', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
