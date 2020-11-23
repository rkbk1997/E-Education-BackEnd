var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Courseschema = new Schema({
    course_title: { type: String, require: true },
    duration: { type: String, require: true },
    fee: { type: String, require: true },
    syllabus: { type: String, require: true },
    image: { type: String, require: true },
});

module.exports = mongoose.model('courseSchema', Courseschema);