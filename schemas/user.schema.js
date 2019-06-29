/**
 * @author mutwol
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String,index: true, unique: true, required: true},
    password: {type: String, min: 6,  required: true},
    status: {type: Boolean, default: false},
    active: {type: Boolean, default: false},
    role: {type: String, enum: ['super-admin', 'user']},
    hash: String,
    activate_token: String,
    userType: {type: String, enum: ['Mobile', 'Web']},
    created_at: {type: Date, default: Date.now()},
    updated_at: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('users', UserSchema);