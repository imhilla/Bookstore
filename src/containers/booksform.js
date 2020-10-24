/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.myRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDrop(event) {
    this.setState(
      {
        title: this.inputNode.value, category: this.myRef.current.value, value: event.target.value,
      },
    );
  }

  handleChange(e) {
    e.preventDefault();
    const thisprops = this.props;
    thisprops.addBook(this.state);
  }

  render() {
    const categories = ['Choose a category', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const renderCategories = categories.map(item => (
      <option key={uuidv4()} value={item}>{item}</option>
    ));

    const { value } = this.state;

    return (
      <div className="addContainer">
        <div>
          <h5 className="titlee">ADD NEW BOOK</h5>
        </div>
        <div>
          <form id="bookForm" name="updateTaskForm" className="formContainer">
            <div className="inputw">
              <input
                type="text"
                id="fname"
                name="title"
                // eslint-disable-next-line no-return-assign
                ref={node => (this.inputNode = node)}
                className="inputLesson"
              />
            </div>
            <div className="dropdown">
              <select
                className="custom-select"
                id="inputGroupSelect01"
                onChange={this.handleDrop}
                ref={this.myRef}
                value={value}
              >
                {renderCategories}
              </select>
            </div>
            <div>
              <button type="button" className="btn btn-primary" onClick={this.handleChange}>ADD BOOK</button>
            </div>
          </form>
        </div>
      </div>

    );
  }
}

BooksForm.propTypes = {
  addBook: PropTypes.func,

};

BooksForm.defaultProps = {
  addBook: '',
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  addBook: book => {
    dispatch(addBook(book));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
