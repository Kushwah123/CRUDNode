const mongoose = require('mongoose')
const  autoIncrement = require('mongoose-auto-increment');

// how our document look like
const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    mob: Number
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'users');
module.exports = mongoose.model('users', userSchema);
