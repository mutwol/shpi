/**
 * @author mutwol
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    code: {type: String, required: true},
    name: {type: String, required: true},
    picture: String,
    category: String,
    created_at: Date.now(),
    updated_at: Date.now()
});

ProductSchema.methods.setCode = function() {
    this.code = new Date().getTime().toString().substr(8,5);
};

module.exports = mongoose.model('Products', ProductSchema);