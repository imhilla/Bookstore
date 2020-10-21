import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/book';
import { removeBook } from '../actions';

const BookList = ({ books, removeBook }) => {
  const handleRemoveBook = book => {
    removeBook(book.id);
    console.log(book)
  };

  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Delete</th>
        </tr>
        {books.map(book => (
          <Book
            id={book.id}
            key={book.id}
            handleRemoveBook={handleRemoveBook}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...book}
          />
        ))}
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books,
});

BookList.propTypes = {
  books: PropTypes.objectOf,
  removeBook: PropTypes.func,
};

BookList.defaultProps = {
  books: {},
  removeBook: () => { },
};

const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(removeBook(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
