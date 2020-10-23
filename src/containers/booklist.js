import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/categoryFilter';

const BookList = ({
  books, category, removeBook, changeFilter,
}) => {
  const handleRemoveBook = book => {
    removeBook(book.id);
  };

  const handleFilterChange = e => {
    const filter = e.target.value;
    changeFilter(filter);
  };

  const author = 'Hillary';

  const filtered = category === 'All' ? books : books.filter(book => book.category === category);
  return (
    <div>
      <CategoryFilter
        filter={category}
        handleFilterChange={handleFilterChange}
      />
      <div>
        {filtered.map(book => (
          <Book
            id={book.id}
            key={book.id}
            author={author}
            handleRemoveBook={handleRemoveBook}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...book}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books.books,
  category: state.books.filter,
});

BookList.propTypes = {
  books: PropTypes.objectOf,
  removeBook: PropTypes.func,
  changeFilter: () => { },
  category: PropTypes.string,
};

BookList.defaultProps = {
  books: {},
  removeBook: () => { },
  changeFilter: () => { },
  category: 'All',
};

const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(removeBook(id)),
  changeFilter: category => dispatch(changeFilter(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
