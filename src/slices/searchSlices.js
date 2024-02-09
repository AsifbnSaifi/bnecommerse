// searchSlice.js
import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchQuery : '',
    selectedCategory: null,
  },
  reducers: {
    setSearch: (state, action) => {
       state.searchQuery = action.payload
    },
    setSelectedCategory: (state, action) => {
        state.selectedCategory = action.payload;
    },
  },
});

export const { setSearch , setSelectedCategory } = searchSlice.actions;
export default searchSlice.reducer;
