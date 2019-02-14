const express = require('express');
const employees = require('../data/employees.js');
const matcher = require('../brains/matchEmp.js');

module.exports = function (app) {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.get('/api/employees', function (req, res) {
        res.json(employees.responses);
    });

    app.post('/api/employees', function(req, res){
        const match = matcher.matchEmp(req.body, employees.responses)
        employees.responses.push(req.body);
        res.json(match);
    });
};