var express = require('express');
var router = express.Router();
const bookModel = require('../models/book');
const service = require('../services/book.service');

/* GET books */
router.get('/', async (req, res) => {
  try {
    // const pageOptions = {
    //   page: parseInt(req.query.page, 10) || 0,
    //   limit: parseInt(req.query.limit, 10) || 10
    // }
    const books = await service.getBooks();
    res.json(books);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const book = await service.getBookById(id);
    if (!book) res.status(404).send('No item found');
    res.json(book);
  } catch (err) {
    res.status(500).send(err);
  }
});

/* POST book */
router.post('/', async (req, res) => {
  try {
    const result = await service.saveBook(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

/* DELETE book */
router.delete('/:id', async (req, res) => {
  try {
    const book = await service.deleteBook(req.params.id);
    if (!book) res.status(404).send('No item found');
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err);
  }
})

/* PATCH book */
router.patch('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const book = req.body;
    const result = await service.updateBook(id, book);
    res.json(result);
  } catch (err) {
    res.status(500).send(err);
  }
})

module.exports = router;
