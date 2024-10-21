import { configureStore } from '@reduxjs/toolkit';
import jokesReducer from './jokes-slice';

const store = configureStore({
  reducer: {
    jokes: jokesReducer,
  },
});

export default store;
