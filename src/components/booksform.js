import React from 'react';

class BooksForm extends React.Component {
  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const renderCategories = categories.map(item => (
      <option>{item}</option>
    ));
    return (
      <div>
        <button type="button" className="addbook btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Add book
        </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add to Bookstore</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="dropdown">
                  <select className="custom-select" id="inputGroupSelect01">
                    <option selected>Choose category</option>
                    {renderCategories}
                  </select>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Add book</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BooksForm;
