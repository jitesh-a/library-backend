const request = require('supertest');
const app = require('../app');

// mocks
const book = require('../mocks/book/book.json');

describe('Book Endpoints', () => {
  it('should create a new book', async () => {
    const res = await request(app)
      .post('/books')
      .send(book);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('title');
  });

  // it('should fetch a single book', async () => {
  //   const postId = 1;
  //   const res = await request(app).get(`//${postId}`);
  //   expect(res.statusCode).toEqual(200);
  //   expect(res.body).toHaveProperty('name');
  // });

  it('should fetch all books', async () => {
    const res = await request(app).get('/books');
    expect(res.statusCode).toEqual(200);
  });
});