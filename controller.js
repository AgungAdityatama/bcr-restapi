'use strict';

var response = require('./res');
var connecction = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API berjalan")
};