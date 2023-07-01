import React from 'react';
import cls from 'classnames';
import styles from './feature-portfolio.module.css';
import {building,kitchen,studio,home} from '../../data/images';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch,useSelector } from 'react-redux';
import { toggle } from '../../state/modal/modalSlice';
import { setPost,setFilteredPosts } from '../../state/portfolio/portfolioSlice';
const newimages=[];
function Post({id,title,categories,featured,featuredImage,images}){
  const dispatch=useDispatch();

  return(
    
      <div onClick={()=> {dispatch(toggle(true)); dispatch(setPost({id,title,categories,featured,featuredImage,images}));} } 
      className={cls('item ml-5 mr-5 mb-5 relative overflow-hidden block pb-5')}>
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

function FeaturedPortfolio({displayFeatured=true,displayCategory="all"}) {
  const featuredPosts = useSelector((state) => state.portfolio.featuredPosts);
  const dispatch=useDispatch();
  dispatch(setFilteredPosts("exterior"));
  
  return (
    <section className={cls(styles.featuredPortfolio,'pt-24','pb-7')}>
      <div className='mx-auto max-w-7xl pl-5 pr-5'>
        <h5 className={cls('uppercase text-center mb-2', styles.tagLine)}>Visit our portfolio</h5>
        <h2 className={cls('text-center pb-20',styles.mainTitle)}>Explore our latest and awesome projects</h2>
        <div className={cls('grid grid-cols-1 md:grid-cols-2 portfolioItems gap-x-10 gap-y-5')}>
        {
          featuredPosts.map(item => (
            <Post
              key={item.attributes.id}
              title={item.attributes.PortfolioTitle}
              categories={item.attributes.project_tags}
              featured={item.attributes.Featured}
              featuredImage={item.attributes.ProjectImages.data[0]}
              images={newimages}
              // images={item.attributes.ProjectImages}
            />
          ))
        }
        </div>

        <div className={cls('mx-auto max-w-7xl pl-10 pr-10 text-center')}>
          <Link href="/portfolio" className={cls(styles.loadMore)}>Load more</Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPortfolio;