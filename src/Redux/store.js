import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './features/message';

const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});

export default store;
