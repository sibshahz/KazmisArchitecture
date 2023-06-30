import { useSelector } from 'react-redux';
import cls from 'classnames';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import 'react-awesome-slider/dist/styles.css';

// const SliderText=()=>{
//   return(
//     <div className={cls(styles.outline)}>
//     Kazmis Architects
//     <p>
//     Designing spaces that inspire.
    // </p>
    {/* <div className={cls(styles.button)}><Link href="/portfolio">See portfolio</Link></div> */}
  {/* </div>
  )
}; */}




function ModalSlider() {
  const images=useSelector((state) => state.portfolio.selectedPost.images);
  return (
    <AwesomeSlider
    animation='scaleOutAnimation'
    >
      {images ? images.map((image,index) => {
        return(
          <div key={index} data-src={image} />
        )
      })
    : ''
    }
    </AwesomeSlider>
   
  )
}

export default ModalSlider;