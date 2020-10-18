import React from 'react';

class Book extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.title}</td>
        <td>{this.props.category}</td>
      </tr>
    )
  }
}

export default Book;