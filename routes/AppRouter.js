const Router = require('express').Router();
const AuthRouter = require('./AuthRouter');
const UserRouter = require('./UserRouter');
const ItemRouter = require('./ItemRouter');

Router.use('/auth', AuthRouter);
Router.use('/user', UserRouter);
Router.use('/item', ItemRouter);

module.exports = Router