const express = require('express');
const challengeRouter = require('./Api');

const Router = express.Router({ caseSensitive: true });

Router.use('/', challengeRouter);

module.exports = Router;
