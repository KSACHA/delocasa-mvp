const express = require('express');
const supabase = require('./supabaseClient'); // This is the file you created earlier
const router = express.Router();

// Test route: fetch all users (for now, no auth check)
router.get('/users', async (req, res) => {
  const { data, error } = await supabase
    .from('DELOCASA_MVP_1.0_DATABASE') // Your table name
    .select('*');

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

module.exports = router;
