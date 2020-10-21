/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

const Book = book => {
  const {
    id, title, category, handleRemoveBook,
  } = book;

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td><button type="button" className="btn btn-primary" onClick={() => handleRemoveBook(book)}>Remove</button></td>
    </tr>
  );
};

export default Book;
