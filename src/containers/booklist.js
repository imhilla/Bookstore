import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/categoryFilter';

const BookList = ({ books, category, removeBook }) => {
  const handleRemoveBook = book => {
    removeBook(book.id);
  };

  const handleFilterChange = e => {
    const filter = e.target.value;
    changeFilter(filter);
  };

  return (
    <div>
      <CategoryFilter
        filter={category}
        handleFilterChange={handleFilterChange}
      />
      <table>
        <tbody>
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
        </tbody>
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
