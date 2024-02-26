const mongoose = require('mongoose');
const UserSchema = require('./user');
const ItemSchema = require('./item');

const User = mongoose.model('User', UserSchema);
const Item = mongoose.model('Item', ItemSchema);

module.exports = {
    Item,
    User
}