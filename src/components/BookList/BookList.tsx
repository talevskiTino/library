import React, { useContext } from 'react';
import Book from '../Book/Book.tsx';
import { BookModel } from '../../types/BookModel';
import './BookList.css';
import { BookContext } from '../../context/BookContext.tsx';

const BookList = () => {
  const bookContext = useContext(BookContext);

  return (
    <div className="book-list">
      <div className="book-container">
        {bookContext.books.map((book: BookModel) => (
          <Book key={`${book.title}-${book.author}`} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
