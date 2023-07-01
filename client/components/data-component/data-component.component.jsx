import { useEffect } from 'react';
import { useGetPortfolioItemsQuery } from '../../state/api';
import { useDispatch } from 'react-redux';
import { setPortfolioPosts,setFeaturedPosts } from '../../state/portfolio/portfolioSlice';

export default function DataComponent() {
    const dispatch=useDispatch();
  const { data, isLoading, isError } = useGetPortfolioItemsQuery();
  useEffect(() => {
    if(data){
        dispatch(setPortfolioPosts(data.data));
        dispatch(setFeaturedPosts());
    }
  
    return () => {
      
    }
  },[data])
  
}
