const express = require('express');
const path = require('path');

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'addHome.html'));
})

hostRouter.post("/add-home", (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'homeAdded.html'));
})

module.exports = hostRouter;