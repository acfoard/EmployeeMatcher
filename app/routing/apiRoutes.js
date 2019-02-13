const path = require('path');
const express = require('express');
surveys = require(path.join(__dirname, '../data/employees.js'));

module.exports = function (app) {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.get('/api/employees', function (req, res) {
        res.json(surveys.responses);
    });

    app.post('/api/employees', function(req, res){
        surveys.responses.push(req.body);
        res.json(surveys.match(req.body, surveys));
    });
};