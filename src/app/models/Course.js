const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Course = new Schema({
    name: String,
    // Khai báo chi tiết hơn
    // name: {type: String, max: 255},
    desc: String,
    img: String,
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
})

// Model name: Course sẽ được convert --> courses
const Model = mongoose.model('Course', Course)

module.exports = Model
