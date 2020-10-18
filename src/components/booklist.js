import React from 'react';
import Book from './book';

class BookList extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   id: ,
  //   title: ,
  //   category: ,
  //   }
  // }

  render() {
    return (
      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
         <Book />
        </table>
      </div>
    )
  }
}
export default BookList