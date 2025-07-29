const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');

// Display login form
router.get('/login', (req, res) => {
  // If user is already logged in, redirect to home
  if (req.isAuthenticated()) {
    return res.redirect('/');
  }
  
  res.render('auth/login', { 
    title: 'NexusCartridge - Login',
    currentPage: 'login'
  });
});

// Process login form
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/auth/login',
    failureFlash: true
  })(req, res, next);
});

// Logout
router.get('/logout', (req, res, next) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    req.flash('success', 'You are now logged out');
    res.redirect('/');
  });
});

// Create admin user (only run this once)
router.get('/setup', async (req, res) => {
  try {
    // Check if admin already exists
    const adminExists = await User.findOne({ username: 'admin' });
    
    if (adminExists) {
      req.flash('error', 'Admin user already exists');
      return res.redirect('/');
    }
    
    // Create admin user
    const admin = new User({
      username: 'admin',
      password: 'abc123##',
      isAdmin: true
    });
    
    await admin.save();
    
    req.flash('success', 'Admin user created');
    res.redirect('/auth/login');
  } catch (err) {
    console.error(err);
    req.flash('error', 'Error setting up admin user');
    res.redirect('/');
  }
});

module.exports = router;