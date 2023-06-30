import { createSlice } from '@reduxjs/toolkit';
import { portfolioItems } from '../../data/data';

const initialState = {
  portfolioPosts: portfolioItems,
  filteredPortfolioPosts:[],
  featuredPosts:portfolioItems.filter(item => item.featured),
  selectedPost:{},
}

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setPost: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.selectedPost= action.payload
    },
    setFilteredPosts: (state,action) => {
      console.log(state.portfolioPosts);
      state.filteredPortfolioPosts=state.portfolioPosts.filter(item => item.projectCategory == action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggle,setPost,setFilteredPosts } = portfolioSlice.actions;

export default portfolioSlice.reducer;