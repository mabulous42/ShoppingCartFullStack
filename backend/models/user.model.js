const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    item: {type: String, required: true, trim: true, unique:true},
    amount: {type: Number, required: true, trim: true},
    quantity: {type: Number, required: true, trim: true},
    subtotal: {type: Number, default:0}
})

const shopListModel = mongoose.models.user_tbs || mongoose.model("user_tbs", userSchema)//creating a user table with an instance of the schema

module.exports = shopListModel