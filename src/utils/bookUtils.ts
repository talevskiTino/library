import { BookModel } from '../types/BookModel';
import { filter } from 'lodash';

export const filterBooks = (
  books: BookModel[],
  searchTerm: string
): BookModel[] => {
  return searchTerm
    ? filter(books, (book: BookModel) =>
        [book.author, book.title, book.genre].some((field) =>
          field.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : books;
};

export const sortBooks = (
  books: BookModel[],
  selectedOption: string
): BookModel[] => {
  return [...books].sort((a, b) => {
    if (a[selectedOption] < b[selectedOption]) return -1;
    if (a[selectedOption] > b[selectedOption]) return 1;
    return 0;
  });
};
