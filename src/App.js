import React from 'react';
import './App.css';
import BookList from './components/booklist';
import BooksForm from './components/booksform';
// import PropTypes from 'prop-types';

function App() {
  return (
    <div className="App">
      <BookList />
      <BooksForm />
    </div>
  );
}

// Greeting.propTypes = {
//   name: PropTypes.string
// };

export default App;
