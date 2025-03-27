const supabase = require('../supabaseClient');

// Signup logic
async function signupUser(email, password, full_name, role) {
  return await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name, role },
    },
  });
}

// Login logic
async function loginUser(email, password) {
  return await supabase.auth.signInWithPassword({ email, password });
}

// Get profile logic
async function getUserProfile(token) {
  return await supabase.auth.getUser(token);
}

module.exports = { signupUser, loginUser, getUserProfile };
