const express = require('express');
const router = express.Router();
const Cartridge = require('../models/Cartridge');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, '../public/images'));
  },
  filename: function(req, file, cb) {
    // Create a unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: function(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
  }
});

// Admin dashboard - List all cartridges
router.get('/', async (req, res, next) => {
  try {
    const cartridges = await Cartridge.find().sort({ title: 1 });
    res.render('admin/index', { 
      title: 'NexusCartridge - Admin Dashboard',
      currentPage: 'admin',
      cartridges 
    });
  } catch (err) {
    next(err);
  }
});

// Display form to add a new cartridge
router.get('/add', (req, res) => {
  res.render('admin/add', { 
    title: 'NexusCartridge - Add New Cartridge',
    currentPage: 'admin-add'
  });
});

// Process add cartridge form
router.post('/add', upload.single('image'), async (req, res, next) => {
  try {
    const { title, description, releaseDate, developer, genre } = req.body;
    
    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
    
    // Set image path
    const imagePath = req.file 
      ? '/images/' + req.file.filename
      : '/images/placeholder.jpg';
    
    // Create new cartridge
    const newCartridge = new Cartridge({
      slug,
      title,
      description,
      image: imagePath,
      releaseDate,
      developer,
      genre
    });
    
    await newCartridge.save();
    
    // Redirect to admin dashboard
    req.flash('success', 'Cartridge added successfully');
    res.redirect('/admin');
  } catch (err) {
    next(err);
  }
});

// Display edit form for a cartridge
router.get('/edit/:id', async (req, res, next) => {
  try {
    const cartridge = await Cartridge.findById(req.params.id);
    
    if (!cartridge) {
      req.flash('error', 'Cartridge not found');
      return res.redirect('/admin');
    }
    
    res.render('admin/edit', { 
      title: 'Edit Cartridge',
      currentPage: 'admin-edit',
      cartridge 
    });
  } catch (err) {
    next(err);
  }
});

// Process edit cartridge form
router.post('/edit/:id', upload.single('image'), async (req, res, next) => {
  try {
    const { title, description, releaseDate, developer, genre } = req.body;
    
    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
    
    const cartridge = await Cartridge.findById(req.params.id);
    
    if (!cartridge) {
      req.flash('error', 'Cartridge not found');
      return res.redirect('/admin');
    }
    
    // If new image uploaded, use it and delete old one
    let imagePath = cartridge.image;
    if (req.file) {
      // Delete old image if not a placeholder
      if (cartridge.image && cartridge.image !== '/images/placeholder.jpg' && fs.existsSync(path.join(__dirname, '../public' + cartridge.image))) {
        fs.unlinkSync(path.join(__dirname, '../public' + cartridge.image));
      }
      imagePath = '/images/' + req.file.filename;
    }
    
    // Update cartridge
    await Cartridge.findByIdAndUpdate(req.params.id, {
      slug,
      title,
      description,
      image: imagePath,
      releaseDate,
      developer,
      genre
    });
    
    req.flash('success', 'Cartridge updated successfully');
    res.redirect('/admin');
  } catch (err) {
    next(err);
  }
});

// Delete cartridge
router.post('/delete/:id', async (req, res, next) => {
  try {
    const cartridge = await Cartridge.findById(req.params.id);
    
    if (!cartridge) {
      req.flash('error', 'Cartridge not found');
      return res.redirect('/admin');
    }
    
    // Delete image if not a placeholder
    if (cartridge.image && cartridge.image !== '/images/placeholder.jpg' && fs.existsSync(path.join(__dirname, '../public' + cartridge.image))) {
      fs.unlinkSync(path.join(__dirname, '../public' + cartridge.image));
    }
    
    await Cartridge.findByIdAndDelete(req.params.id);
    
    req.flash('success', 'Cartridge deleted successfully');
    res.redirect('/admin');
  } catch (err) {
    next(err);
  }
});

module.exports = router;