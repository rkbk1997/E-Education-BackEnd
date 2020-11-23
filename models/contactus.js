var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Contactschema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    subject: { type: String, require: true },
    message: { type: String, require: true },
});

module.exports = mongoose.model('contactRegister', Contactschema);