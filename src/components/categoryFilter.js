import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const stringId = 'category';
const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const renderCategories = categories.map((item, id) => (
  // eslint-disable-next-line no-return-assign
  <option key={uuidv4()} id={stringId + id.toString()} value={item}>{item}</option>
));
const categoryFilter = ({ filter = 'All', handleFilterChange }) => (
  <div>
    <select
      id="inputGroupSelect01"
      onChange={handleFilterChange}
      value={filter}
    >
      <option selected>Choose category</option>
      {renderCategories}
    </select>
  </div>

);

export default categoryFilter;
