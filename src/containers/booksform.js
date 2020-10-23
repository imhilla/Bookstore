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

  handleDrop() {
    this.setState({ title: this.inputNode.value, category: this.myRef.current.value });
  }

  handleChange(e) {
    e.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    this.props.addBook(this.state);
  }

  render() {
    const stringId = 'category';
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const renderCategories = categories.map((item, id) => (
      // eslint-disable-next-line no-return-assign
      <option key={uuidv4()} id={stringId + id.toString()} value={item}>{item}</option>
    ));

    return (
      <div className="addContainer">
        <div>
          <h5 className="titlee">ADD NEW BOOK</h5>
        </div>
        <div>
          <form id="bookForm" name="updateTaskForm" className="formContainer">
            <div className="inputw">
              {/* eslint-disable-next-line no-return-assign */}
              <input type="text" id="fname" name="title" ref={node => (this.inputNode = node)} className="inputLesson" />
            </div>
            <div className="dropdown">
              {/* eslint-disable-next-line react/destructuring-assignment */}
              <select className="custom-select" id="inputGroupSelect01" onChange={this.handleDrop} ref={this.myRef} value={this.state.selectValue}>
                <option selected>Choose category</option>
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
