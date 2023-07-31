import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import BookList from './components/BookList/BookList.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search/Search.tsx';
import { BookProvider } from './context/BookContext.tsx';
import books from './listofbooks.json';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BookProvider
          value={{
            books: books,
            sortBooks: () => {},
            filterBooks: () => {},
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/search/:term" element={<Search />} />
            <Route path="*" element={<BookList />} />
          </Routes>
        </BookProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
