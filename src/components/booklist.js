import React from 'react';
import Book from './book';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

const BookList = ({ books }) => {
  return (
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
  )
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string
    })
  )
}

const mapStateToProps = state => ({
  books: state.books
});

export default connect(mapStateToProps)(BookList);
