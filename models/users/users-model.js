const mongoose = require('mongoose');
const userSchema = require('./users-schema');

const usersModel = mongoose.model(
    "UsersModel", userSchema
)
module.exports = usersModel