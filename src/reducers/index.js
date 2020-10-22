import { combineReducers } from 'redux';
import books from './books';
import changeFilter from './filter';

export default combineReducers({
  books,
  changeFilter,
});
