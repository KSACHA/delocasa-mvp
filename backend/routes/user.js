const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');

// POST /api/signup — Registers a new user
router.post('/signup', async (req, res) => {
  const { email, password, full_name, role } = req.body;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name, role },
    },
  });

  if (error) {
    console.error('Signup Error:', error.message);
    return res.status(400).json({ error: error.message });
  }

  return res.status(201).json({ message: 'User registered', data });
});

// POST /api/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return res.status(401).json({ error: error.message });
  }

  return res.status(200).json({ message: 'Login successful', data });
});

// GET /api/profile — Retrieves current user's profile (after login)
router.get('/profile', async (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'No token provided' });

  const { data: user, error: userError } = await supabase.auth.getUser(token);

  if (userError) {
    console.error('User Fetch Error:', userError.message);
    return res.status(400).json({ error: userError.message });
  }

  return res.status(200).json({ user });
});

module.exports = router;
