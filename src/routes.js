const {
  saveBookHandler,
  showAllBooksHandler,
  showBookIdDetailsHandler,
  updateBookDataHandler,
  deleteBookHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: saveBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: showAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: showBookIdDetailsHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBookDataHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookHandler,
  },
];

module.exports = routes;
