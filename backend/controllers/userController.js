const {
    signupUser,
    loginUser,
    getUserProfile
  } = require('../services/userService');
  
  // Signup Handler
  const signup = async (req, res) => {
    const { email, password, full_name, role } = req.body;
  
    const { data, error } = await signupUser(email, password, full_name, role);
  
    if (error) {
      console.error('Signup Error:', error.message);
      return res.status(400).json({ error: error.message });
    }
  
    return res.status(201).json({ message: 'User registered', data });
  };
  
  // Login Handler
  const login = async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }
  
    const { data, error } = await loginUser(email, password);
  
    if (error) {
      return res.status(401).json({ error: error.message });
    }
  
    return res.status(200).json({ message: 'Login successful', data });
  };
  
  // Profile Fetch Handler
  const getProfile = async (req, res) => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: 'No token provided' });
  
    const { data: user, error } = await getUserProfile(token);
    if (error) return res.status(400).json({ error: error.message });
  
    return res.status(200).json({ user });
  };
  
  module.exports = { signup, login, getProfile };
  