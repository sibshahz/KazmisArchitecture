import React,{useEffect,useState,useRef,Suspense} from 'react';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../state/modal/modalSlice';
import { motion,useAnimate } from 'framer-motion';
import anime from 'animejs';
import cls from 'classnames';
import styles from './modal.module.css';
import { setPost } from '../../state/portfolio/portfolioSlice';
import ModalSlider from '../modal-slider/modal-slider.component';
const Carousel2 = React.lazy(() => import("../carousel/carousel.component"));

const style=
    { 
    color:'black',
    background:"grey",
    zIndex:9999,
    fontSize:66,
    position:'absolute',
    top:0,
    left:0,
    width:'100%',
    overflow:'visible',
    height:'100%',
    position:'fixed',
    animationName:styles.opac,
    animationDuration:'.3s',
    animationTimingFunction:'ease-in-out',
};

const ModalContainer = () => {
  const [imagesLinks,setImagesLinks]=useState();
  const elementRef = useRef(null);
  const display = useSelector((state) => state.modal.displayModal);
  const selectedPost=useSelector((state) => state.portfolio.selectedPost);
  
  const dispatch = useDispatch();

  useEffect(() => {
    
   if(selectedPost!=={}){
    const tempArray=[];
      selectedPost.images?.forEach(item => {
        tempArray.push({src:`${process.env.NEXT_PUBLIC_API_MEDIA}${item.attributes.url}`});      	
      })
      setImagesLinks(tempArray);
   }
  }, [selectedPost]);
  function handleClick() {
    anime({
      targets: '.my-element',
      // keyframes: [
      //   {width: '50%',left:'25%',right:'25%'},
      //   {scale:0.2,opacity:0}
      // ],
      opacity:0,
      scale: 0.7,
      duration: 600, // set the duration in milliseconds
      easing: 'easeOutExpo',
      complete: function(anim) {
        dispatch(toggle(false));
        dispatch(setPost({}));
      }
    });
    
  }

  return (
    <>
    {
    typeof window === 'object' ?
        display && createPortal(
            <div 
            ref={elementRef}
            className={cls(styles.superModal,'my-element')} style={style}>
              <i className={cls('las la-times-circle',styles.closeButton)} onClick={()=> handleClick()}></i>
              <Suspense fallback={<div>Loading</div>}>
                <Carousel2 images={imagesLinks} />
              </Suspense>
            </div>,
            document.body
        )
    :null
    }
      </>
  )
}

export default ModalContainer