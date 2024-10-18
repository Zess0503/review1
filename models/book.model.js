const monggoose = require("mongoose");  

const bookSchema = new monggoose.Schema({
    title: String,
    author: String,
    publication_year: Number,
    genre: String
})
module.exports = monggoose.model("Book", bookSchema)