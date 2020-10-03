const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  author: {
    type: String,
    required: [true, 'author is required']
  },
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  ISBN: {
    type: String,
    required: [true, 'ISBN is required']
  },
  releaseDate: {
    type: Date,
  },
});

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;