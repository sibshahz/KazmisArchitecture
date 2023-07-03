import React,{useState,useEffect} from 'react';
import cls from 'classnames';
import styles from './portfolio-projects.module.css';
import {building,kitchen,studio,home} from '../../data/images';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch,useSelector } from 'react-redux';
import { toggle } from '../../state/modal/modalSlice';
import { useGetProjectTagsQuery,useGetProjectTypesQuery } from '../../state/api';
import { setPost,setFilteredPosts,setProjectTags,setProjectTypes } from '../../state/portfolio/portfolioSlice';

function Post({id,title,categories,featured,featuredImage,images}){
  
  const dispatch=useDispatch();

  return(
    
      <div onClick={()=> {dispatch(toggle(true)); dispatch(setPost({id,title,categories,featured,featuredImage,images}));} } 
      className={cls('item ml-5 mr-5 mb-5 relative overflow-hidden block pb-5 col-span-6 md:col-span-3')}>
            <div className={cls(styles.container)}>
              {/* <Image className={cls('absolute w-full',styles.portfolioImage)} src={building} alt="Portfolio building" /> */}
              <div className={cls(styles.cover)}>
                <i className="las la-expand-arrows-alt"></i>
              </div>
              
              <div className={cls(styles.bgImage)} style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_API_MEDIA}${featuredImage.attributes.url})` }}></div>
            </div>
            <div className={cls(styles.itemDetail,'relative z-10 bg-white bottom-0 pt-4 pr-12 pl-12')}>
              <div className={cls(styles.itemCategory)}>
                  {
                    categories.data.map(item => (
                      <span key={item.id}>{item.attributes.Tag}</span>
                    ))
                    
                  }
              </div>
              <div className={cls(styles.itemTitle)}>
                <h3>{title}</h3>
                <i className={cls('las la-arrow-right float-right',styles.icon)}></i>
              </div>
              
            </div>
          </div>
  );
}

function PortfolioProjects() {
  const dispatch = useDispatch();
  const [selectedCategory,setSelectedCategory]=useState([{id:0,attributes:{ProjectType:"All"}}]);
  const [selectedNavCategory,setSelectedNavCategory]=useState(0);

  const {data,isLoading,isError}=useGetProjectTypesQuery();
  const {data:tags_data,isLoading:tags_isLoading,isError:tags_isError}=useGetProjectTagsQuery();

  useEffect(() => {
    dispatch(setFilteredPosts(0));
    if(data){
      dispatch(setProjectTypes(data.data));
      setSelectedCategory((prevSelectedCategory) => [
        prevSelectedCategory[0], 
        ...data.data, 
      ]);
    }
    if(tags_data){
      dispatch(setProjectTags(tags_data.data));
    }
  }, [data,tags_data]);
  // const projectTypes=useSelector((state) => state.portfolio.projectTypes);
  const filteredPosts = useSelector((state) => state.portfolio.filteredPortfolioPosts);


  
  return (
    <section className={cls(styles.featuredPortfolio,'pt-24','pb-7')}>
      <div className='mx-auto max-w-7xl pl-5 pr-5'>
        <div className={cls('grid grid-cols-2 md:grid-cols-8 portfolioItems gap-x-0 gap-y-5')}>
          <div className='text-center md:text-left portfolio-types md:col-span-2 col-span-2'>
                
              <h3 className={cls(styles.categories)}>Categories</h3>
              <div className={cls(styles.projectTypeContainer)}>
                <ul className={cls(styles.categoriesNav)}>
                {
                  selectedCategory.map((item,index) => (
                    <li 
                    
                    key={item.id} 
                    className={`${selectedNavCategory==index ? styles.selected : styles.notselected}`} 
                    onClick={() => {dispatch(setFilteredPosts(item.id)); setSelectedNavCategory(index);}}>
                      {item.attributes.ProjectType}
                      </li>
                  ))
                }
                </ul>
                </div>
          </div>

          <div className='md:col-span-6 col-span-4 grid grid-cols-6 '>
              <div className='col-span-6 md:block hidden'>
            <h5 className={cls('uppercase text-center mb-2', styles.tagLine)}>Visit our portfolio</h5>
            <h2 className={cls('text-center pb-2',styles.mainTitle)}>Explore our latest and awesome projects</h2>
            </div>
            {filteredPosts.length > 0 ? (
              filteredPosts.map((item) => (
                <Post
                  key={item.attributes.id}
                  title={item.attributes.PortfolioTitle}
                  categories={item.attributes.project_tags}
                  featured={item.attributes.Featured}
                  featuredImage={item.attributes.ProjectImages.data[0]}
                  images={item.attributes.ProjectImages.data}
                  // images={item.attributes.ProjectImages}
                />
              ))
            ) : (
              <h1 className={cls(styles.noData,'col-span-6 text-center')}>Sorry projects under this category are work in progress, updating soon.</h1>
            )}
          </div>

        </div>

      </div>
    </section>
  )
}

export default PortfolioProjects;