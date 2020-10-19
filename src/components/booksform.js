import React from 'react'



class BooksForm extends React.Component {

  render() {
    const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];
    const renderCategories = categories.map(item => (
      <li>{item}</li>
    ));
    return (
      <div>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Launch demo modal
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
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Categories
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    {<a class="dropdown-item" href="#">{renderCategories}</a>}
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