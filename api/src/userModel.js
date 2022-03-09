const mongoose = require("mongoose")
const Schema = mongoose.Schema


const User = new Schema({
    id: Number,
    name: String,
    username: String,
    email: String,
    address: new Schema({
        street: String,
        suite: String,
        city: String,
        zipcode: String,
        geo: new Schema({
            lat: String,
            lng: String
        })
    }),
    phone: String,
    website: String,
    company: new Schema({
        name: String,
        catchPhrase: String,
        bs: String
    })
})

module.exports = mongoose.model("user", User)
