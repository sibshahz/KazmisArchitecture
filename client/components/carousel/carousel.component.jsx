import React,{useState,useEffect} from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

function Carousel2 (props){

  return (

      <div className='carousel-container'>
        <Carousel 
        style={{ height: '80vh', width: '80%',position:'absolute',top:0 }}
        hasIndexBoard={false}
        isAutoPlaying={false}
        isMaximized={true}
        hasSizeButtonAtMax={false}
        autoPlayInterval={5000} 
        images={props.images}  />

      </div>
  );
};

export default Carousel2;