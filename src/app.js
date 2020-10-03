const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const errorHandler = require('./utils/error-handler');
const indexRouter = require('./routes/index');
const booksRouter = require('./routes/books');

const setupSwagger = require('./utils/setup-swagger');
const setupMongoose = require('./utils/setup-mongoose');

let app = express();
setupMongoose();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
setupSwagger(app);

// global error handler
// app.use(errorHandler);

// api routes
app.use('/', indexRouter);
app.use('/books', booksRouter);

module.exports = app;
