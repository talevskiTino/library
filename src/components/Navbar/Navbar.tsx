import React, { useState, useContext, useEffect } from 'react';
import { BookContext } from '../../context/BookContext.tsx';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
const SORT_OPTIONS = [
  { key: 'title', label: 'Alphabetically by Title' },
  { key: 'author', label: 'Alphabetically by Author Name' },
  { key: 'genre', label: 'Alphabetically by Genre' },
];

const Navbar = () => {
  const bookContext = useContext(BookContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const handleDropdownClick = () => {
    setIsDropdownOpen((prevOpen) => !prevOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleSortingChange = (selectedOption) => {
    bookContext.sortBooks(selectedOption);
    closeDropdown();
  };

  useEffect(() => {
    bookContext.sortBooks('author');
  }, []);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${encodeURIComponent(searchTerm)}`);
  };
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">T</Link>
      </div>
      <div className="dropdown">
        <button
          className={`dropdown__btn ${
            isDropdownOpen ? 'dropdown__btn--open' : ''
          }`}
          onClick={handleDropdownClick}
        >
          Sort Books
          <span className="dropdown__arrow">&#9660;</span>
        </button>
        <div
          className={`dropdown__content ${
            isDropdownOpen ? 'dropdown__content--show' : ''
          }`}
        >
          {SORT_OPTIONS.map((option) => (
            <div
              key={option.key}
              className="dropdown__item"
              onClick={() => handleSortingChange(option.key)}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
      <div className="form">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form__input-text"
          />
          <button type="submit" className="form__button">
            Search
          </button>{' '}
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
