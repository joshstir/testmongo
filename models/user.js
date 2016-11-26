var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//set up a mongoose model and pass it using the module.exports
module.exports = mongoose.model('User', new Schema({
    name: String,
    password: String,
    admin: Boolean
}));