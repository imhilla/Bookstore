import React from 'react';
import '../App.css';
import BookList from '../containers/booklist';
import BooksForm from '../containers/booksform';

function App() {
  return (
    <div className="App">
      <BookList />
      <BooksForm />
    </div>
  );
}

export default App;
