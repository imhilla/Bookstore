import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import user from '../img/user.png';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const booksLink = 'BOOKS';

const renderCategories = categories.map(item => (
  // eslint-disable-next-line no-return-assign
  <option key={uuidv4()} value={item}>{item}</option>
));

const categoryFilter = ({ filter = 'All', handleFilterChange }) => (
  <div className="panel-bg">
    <div className="second-panel">
      <h3 className="Bookstore-CMS">Bookstore CMS</h3>
      <h3 className="BOOKS">{booksLink}</h3>
      <div className="categories">
        <select
          id="inputGroupSelect01"
          value={filter}
          onChange={handleFilterChange}
          className="CATEGORIES"
        >
          <option selected>CATEGORIES</option>
          {renderCategories}
        </select>
      </div>
    </div>
    <div className="holder">
      <div className="oval"><img src={user} alt="" className="user" /></div>
    </div>
  </div>
);

export default categoryFilter;
