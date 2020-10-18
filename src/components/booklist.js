import React from 'react';
import Book from './book';
// import PropTypes from 'prop-types'

class BookList extends React.Component {

  render() {
    const book = { id: '20', title: 'River between', category: 'fiction' };

    return (
      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
          <Book {...book} />
        </table>
      </div>
    )
  }
}
export default BookList