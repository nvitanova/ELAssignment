import { createSlice } from '@reduxjs/toolkit';

export const postReducer = createSlice({
    name: 'post',
    initialState: {
        postList: [
            {
              message: "Default Post 1",
              comment: ""
            }
          ]
    },
    reducers: {
        ADD_POST: (state, action) => {
            state.postList.concat(action.payload)
        },
        DELETE_POST: (state, action) => {
            state.postList.splice(action.payload, 1)
        }
    }
});

export const { ADD_POST, DELETE_POST } = postReducer.actions;
export default postReducer.reducer;