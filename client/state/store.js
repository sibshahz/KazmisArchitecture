import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './modal/modalSlice';
import portfolioReducer from './portfolio/portfolioSlice';

export const store = configureStore({
  reducer: {
    modal:modalReducer,
    portfolio:portfolioReducer,
  },
})