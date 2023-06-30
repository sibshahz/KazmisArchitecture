import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modal/modalSlice';
import portfolioReducer from './portfolio/portfolioSlice';

import { setupListeners } from '@reduxjs/toolkit/query';
import {api} from "./api"


export const store = configureStore({
  reducer: {
    modal:modalReducer,
    portfolio:portfolioReducer,
    [api.reducerPath]:api.reducer,
  },
  middleware:(getDefault) => getDefault().concat(api.middleware),
});

setupListeners(store.dispatch);