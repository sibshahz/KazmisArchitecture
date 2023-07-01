import { createSlice } from '@reduxjs/toolkit';
import { portfolioItems } from '../../data/data';

const initialState = {
  portfolioPosts: [],
  filteredPortfolioPosts:[],
  featuredPosts:[],
  selectedPost:{},
}

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setPost: (state,action) => {
      state.selectedPost= action.payload
    },
    setFeaturedPosts:(state)=>{
      state.featuredPosts=state.portfolioPosts.filter(item => item.attributes.Featured === true);
    },
    setPortfolioPosts:(state,action)=>{
      state.portfolioPosts=action.payload;
    },
    setFilteredPosts: (state,action) => {
      state.filteredPortfolioPosts=state.portfolioPosts.filter(item => item.projectCategory == action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggle,setPost,setFilteredPosts,setPortfolioPosts,setFeaturedPosts } = portfolioSlice.actions;

export default portfolioSlice.reducer;