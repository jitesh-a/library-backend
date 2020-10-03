const bookModel = require('../models/book');

const saveBook = async (book) => {
  const newBook = new bookModel(book);
  const result = await newBook.save();
  return result;
}

const getBooks = async (pageOptions) => {
  const books = await bookModel
    .find({})
    // .skip(pageOptions.page * pageOptions.limit)
    // .limit(pageOptions.limit);
  return books;
}

const getBookById = async (id) => {
  const book = await bookModel.findById(id);
  return book;
}

const updateBook = async (id, book) => {
  const result = await bookModel.findByIdAndUpdate(id, book);
  return result;
}

const deleteBook = async (id) => {
  const book = await bookModel.findByIdAndDelete(id);
  return book;
}

module.exports = {
  saveBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook
}