var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ListSchema = new Schema({

module.exports = mongoose.model('List', ListSchema);