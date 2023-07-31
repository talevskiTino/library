import React, { useEffect, useContext } from 'react';
import books from '../../listofbooks.json';
import Book from '../Book/Book.tsx';
import { BookModel } from '../../types/BookModel';
import { useParams } from 'react-router-dom';
import { BookContext } from '../../context/BookContext.tsx';

const Search = () => {
  const { term } = useParams();
  const bookContext = useContext(BookContext);

  useEffect(() => {
    bookContext.filterBooks(books, term || '');
    return () => {
      bookContext.filterBooks('');
    };
  }, [term]);

  if (bookContext.filteredBooks.length === 0) {
    return <p>No results found.</p>;
  }
  return (
    <>
      {bookContext.filteredBooks.map((book: BookModel) => (
        <Book key={book.title} book={book} />
      ))}
    </>
  );
};

export default Search;
