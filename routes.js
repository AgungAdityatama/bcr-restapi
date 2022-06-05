'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);
    app.route('/user')
        .get(jsonku.tampilDataUser);
    app.route('/user/:id')
        .get(jsonku.tampilDataUserID);
    app.route('/user')
        .post(jsonku.tambahUser);
    app.route('/user')
        .put(jsonku.ubahUser);
}