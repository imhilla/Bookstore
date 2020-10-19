import { combineReducers } from 'redux'
import { ADD_BOOK, REMOVE_BOOK } from '../actions/index'

const initialState = {
  books: [],
}

function bookList(state = initialState, action) {
  console.log('woow')
  switch (action.type) {
    case ADD_BOOK:
      return Object.assign({}, state, {
        books: [
          ...state.books,
          {
            // book: action.book,
          }
        ]
      })
    case REMOVE_BOOK:
      return Object.assign({}, state, {
        books: [
          ...state.books,
          {
            // book: action.book,
          }
        ]
      })
    default:
      return state
  }
}

const bookApp = combineReducers({
  bookList
})

export default bookApp
