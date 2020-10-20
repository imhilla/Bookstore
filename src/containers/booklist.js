import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/book';
import { removeBook } from '../actions';

const handleRemoveBook = book => {
  removeBook(book);
};

const BookList = ({ books }) => (
  <div>
    <table>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Category</th>
        <th>Delete</th>
      </tr>
      {books.map(book => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Book key={book.id} {...book} button={<button type="button" className="btn btn-primary" onClick={handleRemoveBook}>Remove book</button>} />
      ))}
    </table>
  </div>
);

const mapStateToProps = state => ({
  books: state.books,
});

BookList.propTypes = {
  books: PropTypes.objectOf,
};

BookList.defaultProps = {
  books: {},
};

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
