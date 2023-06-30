import cls from 'classnames';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import 'react-awesome-slider/dist/styles.css';
import styles from './slider-hero.module.css';
import { slide1,slide2,slide3,slide4,slide5 } from '../../data/images';

const AutoplaySlider = withAutoplay(AwesomeSlider);
const SliderText=()=>{
  return(
    <div className={cls(styles.outline)}>
    Kazmis Architects
    <p>
    Designing spaces that inspire.
    </p>
    {/* <div className={cls(styles.button)}><Link href="/portfolio">See portfolio</Link></div> */}
  </div>
  )
};

function HeroSlider() {
  return (
    
    <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={4000}
    animation="openAnimation"
    bullets={false}
    customContent={<SliderText />}
  >
    <div data-src={slide1} />
    <div data-src={slide2} />
    <div data-src={slide3} />
    <div data-src={slide4} />
    <div data-src={slide5} />
  </AutoplaySlider>
  )
}

export default HeroSlider;