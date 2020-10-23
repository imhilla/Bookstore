/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

const Book = book => {
  const {
    title, category, handleRemoveBook, author,
  } = book;

  return (
    <div className="contents">
      <h3 className="school">{category}</h3>
      <h3 className="title">{title}</h3>
      <h3 className="Suzanne-Collins">{author}</h3>
      <div>
        <a href="#s" className="Comments">Comments</a>
        <span className="Line-2" />
        <button type="button" className="Remove" onClick={() => handleRemoveBook(book)}>Remove</button>
        <span className="Line-2" />
        <a href="#s" className="Edit">Edit</a>
      </div>
    </div>
  );
};

export default Book;
