import React from 'react';
import { connect } from 'react-redux';
import Book from './book';

const BookList = ({ books }) => (
  <div>
    <table>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      {books.map((book, index) => (
        <Book key={book.id} {...book} />
      ))}
    </table>
  </div>
);

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BookList);
