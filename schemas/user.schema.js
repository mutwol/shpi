var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Bcrypt = require('bcrypt');

const UserSchema = new Schema({
    name: {type: String, required: [true, 'user fullname is required!']},
    email: {type: String, required: [true, 'email is required!']},
    password: {type: String, min: [6, 'password to short'],  required: [true, 'password is required!']},
    status: {type: Boolean, default: false},
    userType: {type: String, enum: ['Mobile', 'Web']},
    created_at: {type: Date, default: Date.now()},
    updated_at: {type: Date, default: Date.now()}
});

UserSchema.pre('save', (next) => {
    if(!this.isModified('password')) {
        return next();
    }
    this.password = Bcrypt.hashSync(this.password, 10);
    next();
});

UserSchema.methods.verifyPassword = (pass, callback) => {
    return callback(null, Bcrypt.compareSync(pass, this.password));
};

module.exports = mongoose.model('users', UserSchema);