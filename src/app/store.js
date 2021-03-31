import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../features/posts/postReducer';

export default configureStore({
  reducer: {
    post: postReducer,
  },
});
