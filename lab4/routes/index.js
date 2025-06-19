var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'My CV' });
});

router.get('/about', function(req, res) {
  res.render('about', { title: 'About Me' });
});

router.get('/experience', function(req, res) {
  res.render('experience', { title: 'Work Experience' });
});

router.get('/education', function(req, res) {
  res.render('education', { title: 'Education' });
});

router.get('/skills', function(req, res) {
  res.render('skills', { title: 'Skills' });
});

router.get('/contact', function(req, res) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
