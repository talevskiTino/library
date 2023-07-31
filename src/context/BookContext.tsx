// BookContext.js
import React, { useState } from 'react';
import { filterBooks, sortBooks } from '../utils/bookUtils.ts';
import initialBooks from '../listofbooks.json';

const BookContext = React.createContext({
  books: [],
  filteredBooks: [],
  sortBooks: (selectedOption) => {},
  filterBooks: (searchTerm) => {},
});

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(initialBooks);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleSort = (selectedOption) => {
    let sortedBooks;
    if (filteredBooks.length > 0) {
      sortedBooks = sortBooks(filteredBooks, selectedOption);
      setFilteredBooks(sortedBooks);
    } else {
      sortedBooks = sortBooks(books, selectedOption);
      setBooks(sortedBooks);
    }
  };

  const handleFilter = (books, searchTerm) => {
    const filtered = filterBooks(books, searchTerm);
    setFilteredBooks(filtered);
  };

  return (
    <BookContext.Provider
      value={{
        books,
        filteredBooks,
        sortBooks: handleSort,
        filterBooks: handleFilter,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export { BookProvider, BookContext };
