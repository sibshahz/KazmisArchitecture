import cls from 'classnames';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import 'react-awesome-slider/dist/styles.css';
import styles from './slider-hero.module.css';
import { slide1,slide2,slide3,slide4,slide5 } from '../../data/images';
import Link from "next/link";

const AutoplaySlider = withAutoplay(AwesomeSlider);
const SliderText=()=>{
  return(
    <div className={cls(styles.outline)}>
    <h5>Designing spaces that inspire.</h5>
    <h1>Kazmis Architects</h1>
    <p>
    We work closely with clients to gain an understanding of your desires both philoso phical and practical.
    </p>

    <Link href="/portfolio"><div className={cls(styles.button)}>Visit Portfolio</div></Link>
  </div>
  )
};

function HeroSlider() {
  return (
    
    <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={3000}
    animation="scaleOutAnimation"
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