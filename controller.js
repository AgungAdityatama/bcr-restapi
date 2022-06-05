'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API berjalan", res)
};

//menampilkan semua data user
exports.tampilDataUser = function (req, res) {
    connection.query('SELECT * FROM user', function (error, rows, fields) {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data user berdasarkan ID
exports.tampilDataUserID = function (req, res) {
    let id = req.params.id
    connection.query('SELECT * FROM user WHERE id_user = ?', [id], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menambahkan data user
exports.tambahUser = function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;

    connection.query('INSERT INTO user (name, email, password) VALUES(?,?,?)',
        [name, email, password],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambah Data", res)
            }
        });
};

//Mengubah data berdasarkan ID
exports.ubahUser = function (req, res) {
    var id = req.body.id_user;
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;

    connection.query('UPDATE user SET name=?, email=?, password=? WHERE id_user=?',
        [name, email, password, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Mengubah Data", res)
            }
        });
};

//Menghapus data berdasarkan ID
exports.hapusUser = function (req, res) {
    var id = req.body.id_user;

    connection.query('DELETE FROM user WHERE id_user=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menghapus Data", res)
            }
        });
};