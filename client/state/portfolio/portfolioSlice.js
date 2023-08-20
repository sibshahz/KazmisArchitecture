import { createSlice } from '@reduxjs/toolkit';
import { portfolioItems } from '../../data/data';

const initialState = {
  portfolioPosts: [],
  filteredPortfolioPosts:[],
  featuredPosts:[],
  selectedPost:{},
  projectTypes:[],
  projectTags:[],
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
      
        action.payload===0 ? state.filteredPortfolioPosts = state.portfolioPosts :
        state.filteredPortfolioPosts=state.portfolioPosts.filter(item => item.attributes.project_type.data.id === action.payload);
      

    },
    setProjectTypes:(state,action)=>{
      state.projectTypes=action.payload;
    },
    setProjectTags:(state,action)=>{
      state.projectTags=action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { 
  toggle,setPost,setFilteredPosts,setPortfolioPosts,setFeaturedPosts,setProjectTypes,setProjectTags,

} = portfolioSlice.actions;


export default portfolioSlice.reducer;