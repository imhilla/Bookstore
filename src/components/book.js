/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component {
  render() {
    const {
      id, title, category, button,
    } = this.props;

    return (
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{category}</td>
        <td>{button}</td>
      </tr>
    );
  }
}

Book.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
  button: PropTypes.node,
};

Book.defaultProps = {
  id: '',
  title: '',
  category: '',
  button: '',
};

export default Book;
