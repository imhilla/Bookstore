/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component {
  render() {
    const { id, title, category } = this.props
    return (
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{category}</td>
      </tr>
    );
  }
}

Book.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
};

Book.defaultProps = {
  id: '',
  title: '',
  category: '',
};

export default Book;
