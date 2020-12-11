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

exports.addNewData = function(req, res){
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;

    connection.query("INSERT INTO mahasiswa (nim,nama,jurusan) VALUES(?,?,?) ", [nim,nama,jurusan],function(error, rows, fields){
        if (error) {
            console.log(error);
        }
        else{
            response.ok('add data successfull!', res)
        }
    });

};

exports.editData = function(req, res){
    let id = req.body.id;
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;

    connection.query("UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id=?", [nim,nama,jurusan,id],function(error, rows, fields){
        if (error) {
            console.log(error);
        }
        else{
            response.ok('data has been edited', res)
        }
    });

};


exports.deleteDataId = function (req, res) {
    let id = req.body.id;
    connection.query("DELETE FROM mahasiswa WHERE id = ?", [id],function(error, rows, fields){
        if (error) {
            console.log(error);
        }
        else{
            response.ok("data has been deleted", res)
        }
    });
};