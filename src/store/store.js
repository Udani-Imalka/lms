import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './booksSlice';
import membersSlice from './membersSlice';

export default configureStore({
  reducer: {
    books: booksReducer,
    members: membersSlice,
  },
})