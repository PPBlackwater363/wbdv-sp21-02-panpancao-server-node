const mongoose = require("mongoose");
const usersSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    passwrod: String
}, {collection: "users"})

module.exports = usersSchema