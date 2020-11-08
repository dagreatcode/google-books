const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    author: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
        required: "Image is needed"
    },
    link: {
        type: String, 
        required: "Link is needed"
    }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;