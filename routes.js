'use strict';

module.exports = function (app) {
    var json = require('./controller')

    //home or root
    app.route('/').get(json.index);

    //get all data
    app.route('/tampil').get(json.getAllData);

    //get all data with id
    app.route('/tampil/:id').get(json.getAllDataId);
}