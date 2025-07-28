var express = require('express');
var router = express.Router();
const Cartridge = require('../models/Cartridge');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    // Get total number of cartridges
    const totalCartridges = await Cartridge.countDocuments();
    
    // Count unique developers
    const uniqueDevelopers = await Cartridge.distinct('developer');
    const developerCount = uniqueDevelopers.length;
    
    // Count unique genres
    const uniqueGenres = await Cartridge.distinct('genre');
    const genreCount = uniqueGenres.length;
    
    // Get the most common genre
    const genreCounts = await Cartridge.aggregate([
      { $group: { _id: "$genre", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 1 }
    ]);
    
    // Calculate the newest game year
    const newestGameData = await Cartridge.find()
      .sort({ releaseDate: -1 })
      .limit(1);
    const newestGameYear = newestGameData.length > 0 ? 
      new Date(newestGameData[0].releaseDate).getFullYear() : 
      new Date().getFullYear();

    res.render('index', { 
      title: 'NexusCartridge',
      stats: {
        totalCartridges,
        developerCount,
        genreCount,
        newestGameYear
      }
    });
  } catch (err) {
    console.error('Error fetching stats:', err);
    // Provide default values in case of error
    res.render('index', { 
      title: 'NexusCartridge',
      stats: {
        totalCartridges: 0,
        developerCount: 0,
        genreCount: 0,
        newestGameYear: new Date().getFullYear()
      }
    });
  }
});

module.exports = router;
