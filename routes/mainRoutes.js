const express = require('express');
const router = express.Router();
const { registerBook,getAllBooks,findBook,deleteBook,updateBook } = require('../controller/Controller');

// Define the route for registering a book
router.post('/register',registerBook);
router.get('/', getAllBooks);
router.get('/:id', findBook);
router.delete('/:id',deleteBook);
router.put('/:id',updateBook);

module.exports = router;
