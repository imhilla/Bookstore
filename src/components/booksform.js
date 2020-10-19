import React from 'react'

class BooksForm extends React.Component {
  render() {
    const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];
    const renderCategories = categories.map(item => (
      <option>{item}</option>
    ));
    return (
      <div>
        <button type="button" class="addbook btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Add book
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add to Bookstore</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="dropdown">
                  <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Choose category</option>
                    {renderCategories}
                  </select>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Add book</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BooksForm;
