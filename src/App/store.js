import { createStore } from 'redux';
import { bookApp } from '../reducers/books';
import { addBook, removeBook } from '../actions/index'

const store = createStore(bookApp)
// console.log(store.getState())
// const unsubscribe = store.subscribe(() => console.log(store.getState()))
