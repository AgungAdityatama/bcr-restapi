var express = require('express');
var auth = require('./auth');
var router = express.Router();

//daftarkan menu register
router.post('/user/register', auth.registrasi);

module.exports = router;