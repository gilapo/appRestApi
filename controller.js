'use strict';

var response = require('./res');
var connection = require("./connect");
const { query } = require('express');

exports.index =function(req, res){
    response.ok("appRestApi is running", res)
};

exports.getAllData = function (req, res) {
    connection.query("SELECT * FROM mahasiswa", function(error, rows, fields){
        if (error) {
            console.log(error);
        }
        else{
            response.ok(rows, res)
        }
    });
};

exports.getAllDataId = function (req, res) {
    let id = req.params.id;
    connection.query("SELECT * FROM mahasiswa WHERE id = ?", [id],function(error, rows, fields){
        if (error) {
            console.log(error);
        }
        else{
            response.ok(rows, res)
        }
    });
};