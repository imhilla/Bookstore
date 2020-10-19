import React from 'react';
import Book from './book';
// import PropTypes from 'prop-types'

const BookList = ({ books }) => (
  <ul>
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

  </ul>
)

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       completed: PropTypes.bool.isRequired,
//       text: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired,
//   onTodoClick: PropTypes.func.isRequired
// }


export default BookList
