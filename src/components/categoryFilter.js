import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const renderCategories = categories.map(item => (
  // eslint-disable-next-line no-return-assign
  <option key={uuidv4()} value={item}>{item}</option>
));

const categoryFilter = ({ filter = 'All', handleFilterChange }) => (
  <div className="dropdown">
    <h3>Filter books</h3>
    <select
      id="inputGroupSelect01"
      value={filter}
      onChange={handleFilterChange}
    >
      <option selected>Choose category</option>
      {renderCategories}
    </select>
  </div>

);

export default categoryFilter;
