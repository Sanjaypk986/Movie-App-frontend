import { createSlice } from '@reduxjs/toolkit';

export const reviewSlice = createSlice({
  name: 'review',
  initialState: {
    reviews: []
  },
  reducers: {
    addReview: (state, action) => {
      state.reviews = [...action.payload];
    },
    addOneReview: (state, action) => {
        state.reviews.push(action.payload);
      }
  }
});

export const { addReview,addOneReview } = reviewSlice.actions;

export default reviewSlice.reducer;
