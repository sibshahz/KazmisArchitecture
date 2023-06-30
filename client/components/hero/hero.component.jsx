import cls from 'classnames';
import styles from './hero.module.css';
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion"
import HeroSlider from '../hero-slider/hero-slider.component';
import slideone from '../../public/images/slider1.jpg';
import slidetwo from '../../public/images/slider2.jpg';
import slidethree from '../../public/images/slider3.jpg';
import slidefour from '../../public/images/slider4.jpg';
import {World} from '../world/world.component';
import ImageGallery from '../image-slider/image-slider.component';
import Link from 'next/link';


function Hero() {

  return (

    <>
    <HeroSlider />
    
    
    </>
  )
}

export default Hero;