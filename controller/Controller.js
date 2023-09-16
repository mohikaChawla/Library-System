const express = require('express')
const dotenv = require('dotenv').config()
const asynchadler = require('express-async-handler')
const app =express()
const {Book} =require('../model/book')

const registerBook = async (req, res) => {
    try {
      // Code to register a book here
      const { name, price, description, quantity, authorName } = req.body;
      if (!name || !price || !description || !quantity || !authorName) {
        res.status(400).json({ error: 'Please add all fields' });
        return;
      }
  
      // Create book
      const book = await Book.create({
        name,
        price,
        description,
        quantity,
        authorName,
      });
  
      // Send response as JSON
      res.status(201).json({
        _id: book.id,
        name: book.name,
        price: book.price,
        description: book.description,
        quantity: book.quantity,
        authorName: book.authorName,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
};

const findBook = async (req, res) => {
    try {
        const bookId = req.params.id; // Use the parameter from the URL

        // Use the Book model to find a book by its ID
        const book = await Book.findById(bookId);
    
      if (!book) {
        return res.status(404).json({ error: 'Book not found' });
      }
  
      res.json(book);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  const getAllBooks = async (req, res) => {
    try {
      const books = await Book.find();
  
      res.json(books);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  const deleteBook = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find the book by ID and remove it
      const deletedBook = await Book.findByIdAndRemove(id);
  
      if (!deletedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
  
      res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  const updateBook = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedBookData = req.body;
  
      // Find the book by ID and update its fields
      const updatedBook = await Book.findByIdAndUpdate(
        id,
        updatedBookData,
        { new: true } // Return the updated book
      );
  
      if (!updatedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
  
      res.status(200).json(updatedBook);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  
  
  
  module.exports = {
    registerBook,
    findBook,
    getAllBooks,
    deleteBook,
    updateBook,
  };