import { combineReducers } from 'redux';
import books from './books';
import filter from './filter';

const rootReducer = state => combineReducers({
  books: books(state.books),
  filter: filter(state.filter),
});

export default rootReducer;
