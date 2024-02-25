const Router = require('express').Router();

Router.use('/item', ItemRouter);

module.exports = Router