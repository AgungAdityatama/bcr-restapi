'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);
    app.route('/user')
        .get(jsonku.tampilsemuadatauser);
    app.route('/user/:id')
        .get(jsonku.tampildatauserid);
    app.route('/user')
        .post(jsonku.tambahUser);
}