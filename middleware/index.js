var express = require('express');
var auth = require('./auth');
var router = express.Router();
var verifikasi = require('./verifikasi')

//daftarkan menu register
router.post('/user/register', auth.registrasi);
router.post('/user/login', auth.login);

//alamat yang perlu otorisasi
router.get('/user/dashboard', verifikasi(), auth.halamanAdmin)

module.exports = router;