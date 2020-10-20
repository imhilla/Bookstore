import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/book';

const BookList = ({ books }) => (
  <div>
    <table>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      {books.map(book => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Book {...book} />
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

export default connect(mapStateToProps)(BookList);
