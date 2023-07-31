import React from 'react';
import { BookModel } from '../../types/BookModel';
import './Book.css';
interface BookProps {
  book: BookModel;
}
const Book: React.FC<BookProps> = ({ book }) => {
  return (
    <div className="book-card">
      <h2 className="book-card__title">{book.title}</h2>
      <p className="book-card__author">Author: {book.author}</p>
      <p className="book-card__genre">Genre: {book.genre}</p>
    </div>
  );
};

export default Book;
