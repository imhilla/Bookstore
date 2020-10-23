/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

const Book = book => {
  const {
    title, category, handleRemoveBook, author,
  } = book;

  return (
    <div className="contents">
      <div>
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
      <div className="d-flex">
        <div className="container">
          <div id="activeBorder" className="active-border">
            <div id="circle" className="circle">
              <span className="prec 270" id="prec" />
            </div>
          </div>
        </div>
        <div className="d-flexx">
          <div className="Percent-Complete">
            64%
          </div>
          <p className="Completed">Completed</p>
        </div>
      </div>
      <span className="span-line" />
      <div>
           <h3></h3>
      </div>
    </div>
  );
};

export default Book;
