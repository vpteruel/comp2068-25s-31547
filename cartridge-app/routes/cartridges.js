var express = require('express');
var router = express.Router();
var createError = require('http-errors');
const Cartridge = require('../models/Cartridge');

/* GET cartridges page. */
router.get('/', async function(req, res, next) {
  try {
    // Get pagination parameters
    const page = parseInt(req.query.page) || 1;
    const limit = 9; // Number of cartridges per page
    const skip = (page - 1) * limit;
    
    // Get total count for pagination
    const totalCartridges = await Cartridge.countDocuments();
    const totalPages = Math.ceil(totalCartridges / limit);
    
    // Get cartridges for current page
    const cartridges = await Cartridge.find()
      .sort({ title: 1 })
      .skip(skip)
      .limit(limit);
    
    res.render('cartridges', { 
      title: 'NexusCartridge',
      cartridges,
      pagination: {
        current: page,
        previous: page > 1 ? page - 1 : null,
        next: page < totalPages ? page + 1 : null,
        pages: Array.from({ length: totalPages }, (_, i) => i + 1),
        total: totalPages
      }
    });
  } catch (err) {
    next(err);
  }
});

/* GET individual cartridge by slug */
router.get('/:slug', async function(req, res, next) {
  try {
    const cartridge = await Cartridge.findOne({ slug: req.params.slug });
    
    if (!cartridge) {
      return next(createError(404));
    }
    
    res.render('cartridge', cartridge);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
