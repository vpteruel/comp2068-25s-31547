var express = require('express');
var router = express.Router();

/* GET cartridges page. */
router.get('/', function(req, res, next) {
  res.render('cartridges', { title: 'NexusCartridge' });
});

// Super Mario Odyssey
router.get('/super-mario-odyssey', function(req, res, next) {
  res.render('cartridge', {
    title: 'Super Mario Odyssey',
    description: 'Join Mario on a globe-trotting adventure to save Princess Peach from Bowser\'s wedding plans.',
    image: '/images/super-mario-odyssey.jpg',
    releaseDate: 'October 27, 2017',
    developer: 'Nintendo EPD',
    genre: 'Platformer'
  });
});

// Pokémon Legends: Z-A
router.get('/pokemon-legends-z-a', function(req, res, next) {
  res.render('cartridge', {
    title: 'Pokémon Legends: Z-A',
    description: 'Embark on a new adventure in the Pokémon world with Pokémon Legends: Z-A.',
    image: '/images/pokemon-legends-z-a.jpg',
    releaseDate: 'January 28, 2022',
    developer: 'Game Freak',
    genre: 'Action RPG'
  });
});

// The Legend of Zelda: Tears of the Kingdom
router.get('/the-legend-of-zelda-tears-of-the-kingdom', function(req, res, next) {
  res.render('cartridge', {
    title: 'The Legend of Zelda: Tears of the Kingdom',
    description: 'Explore the vast kingdom of Hyrule in this critically acclaimed open-world adventure.',
    image: '/images/the-legend-of-zelda-tears-of-the-kingdom.jpg',
    releaseDate: 'May 12, 2023',
    developer: 'Nintendo EPD',
    genre: 'Action-Adventure'
  });
});

// Super Mario Party Jamboree
router.get('/super-mario-party-jamboree', function(req, res, next) {
  res.render('cartridge', {
    title: 'Super Mario Party Jamboree',
    description: 'Join Mario and friends in a wild party adventure filled with mini-games and challenges.',
    image: '/images/super-mario-party-jamboree.jpg',
    releaseDate: 'October 5, 2018',
    developer: 'NDcube',
    genre: 'Party'
  });
});

// The Legend of Zelda: Breath of the Wild
router.get('/the-legend-of-zelda-breath-of-the-wild', function(req, res, next) {
  res.render('cartridge', {
    title: 'The Legend of Zelda: Breath of the Wild',
    description: 'Explore the vast kingdom of Hyrule in this critically acclaimed open-world adventure.',
    image: '/images/the-legend-of-zelda-breath-of-the-wild.jpg',
    releaseDate: 'March 3, 2017',
    developer: 'Nintendo EPD',
    genre: 'Action-Adventure'
  });
});

// Kirby and the Forgotten Land
router.get('/kirby-and-the-forgotten-land', function(req, res, next) {
  res.render('cartridge', {
    title: 'Kirby and the Forgotten Land',
    description: 'Join Kirby in a new 3D adventure to save the Forgotten Land from an unknown threat.',
    image: '/images/kirby-and-the-forgotten-land.jpg',
    releaseDate: 'March 25, 2022',
    developer: 'HAL Laboratory',
    genre: 'Platformer'
  });
});

// Super Smash Bros. Ultimate
router.get('/super-smash-bros-ultimate', function(req, res, next) {
  res.render('cartridge', {
    title: 'Super Smash Bros. Ultimate',
    description: 'The ultimate crossover fighting game featuring characters from across the gaming universe.',
    image: '/images/super-smash-bros-ultimate.jpg',
    releaseDate: 'December 7, 2018',
    developer: 'Bandai Namco Studios',
    genre: 'Fighting'
  });
});

// Super Mario Bros. Wonder
router.get('/super-mario-bros-wonder', function(req, res, next) {
  res.render('cartridge', {
    title: 'Super Mario Bros. Wonder',
    description: 'Experience a brand new 2D Mario adventure with innovative gameplay mechanics and stunning visuals.',
    image: '/images/super-mario-bros-wonder.jpg',
    releaseDate: 'October 20, 2023',
    developer: 'Nintendo EPD',
    genre: 'Platformer'
  });
});

// Super Mario 3D World + Bowser's Fury
router.get('/super-mario-3d-world-bowsers-fury', function(req, res, next) {
  res.render('cartridge', {
    title: 'Super Mario 3D World + Bowser\'s Fury',
    description: 'A double feature with the cooperative 3D platformer and a new open-world adventure.',
    image: '/images/super-mario-3d-world-bowsers-fury.jpg',
    releaseDate: 'February 12, 2021',
    developer: 'Nintendo EPD',
    genre: 'Platformer'
  });
});

// Mario Kart 8 Deluxe
router.get('/mario-kart-8-deluxe', function(req, res, next) {
  res.render('cartridge', {
    title: 'Mario Kart 8 Deluxe',
    description: 'Race your friends in the ultimate Mario Kart experience, featuring all your favorite characters and tracks.',
    image: '/images/mario-kart-8-deluxe.jpg',
    releaseDate: 'April 28, 2017',
    developer: 'Nintendo EPD',
    genre: 'Racing'
  });
});

// The Legend of Zelda: Link's Awakening
router.get('/the-legend-of-zelda-links-awakening', function(req, res, next) {
  res.render('cartridge', {
    title: 'The Legend of Zelda: Link\'s Awakening',
    description: 'Revisit the classic adventure in this charming remake for the Nintendo Switch.',
    image: '/images/the-legend-of-zelda-links-awakening.jpg',
    releaseDate: 'September 20, 2019',
    developer: 'Grezzo',
    genre: 'Action-Adventure'
  });
});

// Super Mario 3D All-Stars
router.get('/super-mario-3d-all-stars', function(req, res, next) {
  res.render('cartridge', {
    title: 'Super Mario 3D All-Stars',
    description: 'A collection of three classic 3D Mario adventures, remastered for the Nintendo Switch.',
    image: '/images/super-mario-3d-all-stars.jpg',
    releaseDate: 'September 18, 2020',
    developer: 'Nintendo EPD',
    genre: 'Platformer'
  });
});

// New Super Mario Bros. U Deluxe
router.get('/new-super-mario-bros-u-deluxe', function(req, res, next) {
  res.render('cartridge', {
    title: 'New Super Mario Bros. U Deluxe',
    description: 'Join Mario and friends in a classic 2D platforming adventure, now enhanced for the Nintendo Switch.',
    image: '/images/new-super-mario-bros-u-deluxe.jpg',
    releaseDate: 'January 11, 2019',
    developer: 'Nintendo EPD',
    genre: 'Platformer'
  });
});

// Teenage Mutant Ninja Turtles: The Cowabunga Collection
router.get('/teenage-mutant-ninja-turtles-the-cowabunga-collection', function(req, res, next) {
  res.render('cartridge', {
    title: 'Teenage Mutant Ninja Turtles: The Cowabunga Collection',
    description: 'A nostalgic collection of classic TMNT games from the arcade and home consoles.',
    image: '/images/teenage-mutant-ninja-turtles-the-cowabunga-collection.jpg',
    releaseDate: 'August 30, 2022',
    developer: 'Digital Eclipse',
    genre: 'Action'
  });
});

// Donkey Kong Country Returns HD
router.get('/donkey-kong-country-returns-hd', function(req, res, next) {
  res.render('cartridge', {
    title: 'Donkey Kong Country Returns HD',
    description: 'Join Donkey Kong and Diddy Kong in a thrilling platforming adventure through lush jungles and treacherous caves.',
    image: '/images/donkey-kong-country-returns-hd.jpg',
    releaseDate: 'May 4, 2015',
    developer: 'Nintendo EPD',
    genre: 'Platformer'
  });
});

// Metroid Dread
router.get('/metroid-dread', function(req, res, next) {
  res.render('cartridge', {
    title: 'Metroid Dread',
    description: 'The first 2D Metroid game in 19 years, featuring a new art style and gameplay mechanics.',
    image: '/images/metroid-dread.jpg',
    releaseDate: 'October 8, 2021',
    developer: 'MercurySteam',
    genre: 'Action-Adventure'
  });
});

// Metroid Prime Remastered
router.get('/metroid-prime-remastered', function(req, res, next) {
  res.render('cartridge', {
    title: 'Metroid Prime Remastered',
    description: 'Experience the critically acclaimed Metroid Prime with enhanced graphics and controls.',
    image: '/images/metroid-prime-remastered.jpg',
    releaseDate: 'February 8, 2023',
    developer: 'Nintendo EPD',
    genre: 'Action-Adventure'
  });
});

// Animal Crossing: New Horizons
router.get('/animal-crossing-new-horizons', function(req, res, next) {
  res.render('cartridge', {
    title: 'Animal Crossing: New Horizons',
    description: 'Create your dream island getaway in this charming life simulation game.',
    image: '/images/animal-crossing-new-horizons.jpg',
    releaseDate: 'March 20, 2020',
    developer: 'Nintendo EPD',
    genre: 'Simulation'
  });
});

// Donkey Kong Country: Tropical Freeze
router.get('/donkey-kong-country-tropical-freeze', function(req, res, next) {
  res.render('cartridge', {
    title: 'Donkey Kong Country: Tropical Freeze',
    description: 'Join Donkey Kong and friends in a vibrant platforming adventure across a variety of lush environments.',
    image: '/images/donkey-kong-country-tropical-freeze.jpg',
    releaseDate: 'February 21, 2014',
    developer: 'Nintendo EPD',
    genre: 'Platformer'
  });
});

// Splatoon 2
router.get('/splatoon-2', function(req, res, next) {
  res.render('cartridge', {
    title: 'Splatoon 2',
    description: 'Join the ink-splatting action in this colorful team-based shooter.',
    image: '/images/splatoon-2.jpg',
    releaseDate: 'July 21, 2017',
    developer: 'Nintendo EPD',
    genre: 'Shooter'
  });
});

// Splatoon 3
router.get('/splatoon-3', function(req, res, next) {
  res.render('cartridge', {
    title: 'Splatoon 3',
    description: 'The latest installment in the Splatoon series, featuring new gameplay mechanics and a fresh art style.',
    image: '/images/splatoon-3.jpg',
    releaseDate: 'September 9, 2022',
    developer: 'Nintendo EPD',
    genre: 'Shooter'
  });
});

// Rayman Legends: Definitive Edition
router.get('/rayman-legends-definitive-edition', function(req, res, next) {
  res.render('cartridge', {
    title: 'Rayman Legends: Definitive Edition',
    description: 'Experience the critically acclaimed platformer with stunning visuals and new content.',
    image: '/images/rayman-legends-definitive-edition.jpg',
    releaseDate: 'September 12, 2014',
    developer: 'Ubisoft',
    genre: 'Platformer'
  });
});

// Minecraft
router.get('/minecraft', function(req, res, next) {
  res.render('cartridge', {
    title: 'Minecraft',
    description: 'Explore the blocky world of Minecraft, where you can build, mine, and survive.',
    image: '/images/minecraft.jpg',
    releaseDate: 'May 11, 2021',
    developer: 'Mojang Studios',
    genre: 'Sandbox'
  });
});

// Spyro Reignited Trilogy
router.get('/spyro-reignited-trilogy', function(req, res, next) {
  res.render('cartridge', {
    title: 'Spyro Reignited Trilogy',
    description: 'Relive the classic adventures of Spyro the Dragon in this beautifully remastered collection.',
    image: '/images/spyro-reignited-trilogy.jpg',
    releaseDate: 'November 13, 2018',
    developer: 'Toys for Bob',
    genre: 'Platformer'
  });
});

// Street Fighter 30th Anniversary Collection
router.get('/street-fighter-30th-anniversary-collection', function(req, res, next) {
  res.render('cartridge', {
    title: 'Street Fighter 30th Anniversary Collection',
    description: 'Celebrate the legacy of Street Fighter with this comprehensive collection of classic games.',
    image: '/images/street-fighter-30th-anniversary-collection.jpg',
    releaseDate: 'May 29, 2018',
    developer: 'Digital Eclipse',
    genre: 'Fighting'
  });
});

// Mario + Rabbids Sparks of Hope
router.get('/mario-plus-rabbids-sparks-of-hope', function(req, res, next) {
  res.render('cartridge', {
    title: 'Mario + Rabbids Sparks of Hope',
    description: 'Join Mario and friends in this turn-based strategy game featuring a new adventure in the Mushroom Kingdom.',
    image: '/images/mario-plus-rabbids-sparks-of-hope.jpg',
    releaseDate: 'October 20, 2022',
    developer: 'Ubisoft',
    genre: 'Strategy'
  });
});

// Mega Man 11
router.get('/mega-man-11', function(req, res, next) {
  res.render('cartridge', {
    title: 'Mega Man 11',
    description: 'The Blue Bomber returns in this action-packed platformer with a fresh new look.',
    image: '/images/mega-man-11.jpg',
    releaseDate: 'October 2, 2018',
    developer: 'Capcom',
    genre: 'Platformer'
  });
});

// Mega Man Zero/ZX Legacy Collection
router.get('/mega-man-zero-zx-legacy-collection', function(req, res, next) {
  res.render('cartridge', {
    title: 'Mega Man Zero/ZX Legacy Collection',
    description: 'Experience the complete saga of Mega Man Zero and Mega Man ZX in this definitive collection.',
    image: '/images/mega-man-zero-zx-legacy-collection.jpg',
    releaseDate: 'January 21, 2020',
    developer: 'Capcom',
    genre: 'Platformer'
  });
});

// Mario + Rabbids Kingdom Battle
router.get('/mario-plus-rabbids-kingdom-battle', function(req, res, next) {
  res.render('cartridge', {
    title: 'Mario + Rabbids Kingdom Battle',
    description: 'Join Mario and friends in this turn-based strategy game featuring a new adventure in the Mushroom Kingdom.',
    image: '/images/mario-plus-rabbids-kingdom-battle.jpg',
    releaseDate: 'August 29, 2017',
    developer: 'Ubisoft',
    genre: 'Strategy'
  });
});

// Super Bomberman R
router.get('/super-bomberman-r', function(req, res, next) {
  res.render('cartridge', {
    title: 'Super Bomberman R',
    description: 'Join Bomberman in this explosive multiplayer action game with a variety of game modes.',
    image: '/images/super-bomberman-r.jpg',
    releaseDate: 'March 3, 2017',
    developer: 'Konami',
    genre: 'Action'
  });
});

// Sonic Racing: CrossWorlds
router.get('/sonic-racing-crossworlds', function(req, res, next) {
  res.render('cartridge', {
    title: 'Sonic Racing: CrossWorlds',
    description: 'Join Sonic and friends in this high-speed racing game that takes you across various worlds.',
    image: '/images/sonic-racing-crossworlds.jpg',
    releaseDate: 'November 8, 2022',
    developer: 'Sega',
    genre: 'Racing'
  });
});

// Cat Quest: The Fur-tastic Trilogy
router.get('/cat-quest-the-fur-tastic-trilogy', function(req, res, next) {
  res.render('cartridge', {
    title: 'Cat Quest: The Fur-tastic Trilogy',
    description: 'Embark on a whimsical adventure in this charming RPG series featuring adorable cats and epic quests.',
    image: '/images/cat-quest-the-fur-tastic-trilogy.jpg',
    releaseDate: 'September 24, 2021',
    developer: 'The Gentlebros',
    genre: 'RPG'
  });
});

// Mario & Luigi: Brothership
router.get('/mario-and-luigi-brothership', function(req, res, next) {
  res.render('cartridge', {
    title: 'Mario & Luigi: Brothership',
    description: 'Join Mario and Luigi in this hilarious RPG adventure that takes sibling rivalry to new heights.',
    image: '/images/mario-and-luigi-brothership.jpg',
    releaseDate: 'March 25, 2022',
    developer: 'AlphaDream',
    genre: 'RPG'
  });
});

// Luigi's Mansion 2 HD
router.get('/luigis-mansion-2-hd', function(req, res, next) {
  res.render('cartridge', {
    title: "Luigi's Mansion 2 HD",
    description: "Join Luigi in this spooky adventure as he explores haunted mansions and captures ghosts.",
    image: '/images/luigis-mansion-2-hd.jpg',
    releaseDate: 'May 20, 2022',
    developer: 'Nintendo',
    genre: 'Action-Adventure'
  });
});

// Rugrats: Adventures in Gameland
router.get('/rugrats-adventures-in-gameland', function(req, res, next) {
  res.render('cartridge', {
    title: 'Rugrats: Adventures in Gameland',
    description: 'Join the Rugrats in this fun-filled adventure as they explore a world of imagination and creativity.',
    image: '/images/rugrats-adventures-in-gameland.jpg',
    releaseDate: 'October 25, 1999',
    developer: 'Naughty Dog',
    genre: 'Platformer'
  });
});

// Mario vs. Donkey Kong
router.get('/mario-vs-donkey-kong', function(req, res, next) {
  res.render('cartridge', {
    title: 'Mario vs. Donkey Kong',
    description: 'Join Mario in this puzzle-platformer as he battles Donkey Kong and solves challenging puzzles.',
    image: '/images/mario-vs-donkey-kong.jpg',
    releaseDate: 'February 27, 2004',
    developer: 'Nintendo',
    genre: 'Puzzle-Platformer'
  });
});

// Crash Team Racing Nitro-Fueled
router.get('/crash-team-racing-nitro-fueled', function(req, res, next) {
  res.render('cartridge', {
    title: 'Crash Team Racing Nitro-Fueled',
    description: 'Join Crash and friends in this high-speed kart racing game featuring a variety of tracks and characters.',
    image: '/images/crash-team-racing-nitro-fueled.jpg',
    releaseDate: 'June 21, 2019',
    developer: 'Beenox',
    genre: 'Racing'
  });
});

// Sonic Superstars
router.get('/sonic-superstars', function(req, res, next) {
  res.render('cartridge', {
    title: 'Sonic Superstars',
    description: 'Join Sonic and friends in this exciting new adventure that brings classic gameplay elements to a modern audience.',
    image: '/images/sonic-superstars.jpg',
    releaseDate: 'December 15, 2023',
    developer: 'Sega',
    genre: 'Platformer'
  });
});

// Crash Bandicoot 4: It's About Time
router.get('/crash-bandicoot-4-its-about-time', function(req, res, next) {
  res.render('cartridge', {
    title: "Crash Bandicoot 4: It's About Time",
    description: "Join Crash and Coco in this thrilling platformer as they travel through time and space to save the multiverse.",
    image: '/images/crash-bandicoot-4-its-about-time.jpg',
    releaseDate: 'October 2, 2020',
    developer: 'Toys for Bob',
    genre: 'Platformer'
  });
});

// Mario Party Superstars
router.get('/mario-party-superstars', function(req, res, next) {
  res.render('cartridge', {
    title: 'Mario Party Superstars',
    description: 'Join Mario and friends in this exciting party game featuring classic boards and mini-games from the series.',
    image: '/images/mario-party-superstars.jpg',
    releaseDate: 'October 29, 2021',
    developer: 'NDcube',
    genre: 'Party'
  });
});

// Taiko no Tatsujin: Drum 'n' Fun!
router.get('/taiko-no-tatsujin-drum-n-fun', function(req, res, next) {
  res.render('cartridge', {
    title: "Taiko no Tatsujin: Drum 'n' Fun!",
    description: "Join the fun in this rhythm game where you can play along with your favorite songs using a drum controller.",
    image: '/images/taiko-no-tatsujin-drum-n-fun.jpg',
    releaseDate: 'November 14, 2018',
    developer: 'Bandai Namco Entertainment',
    genre: 'Rhythm'
  });
});

module.exports = router;
