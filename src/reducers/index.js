import { combineReducers } from 'redux';
import books from './books';
// import filter from './filter';

const rootReducer = combineReducers({
  books,
  // filter,
});
export default rootReducer;
