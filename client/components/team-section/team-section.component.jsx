import React,{useEffect,useState} from 'react';
import cls from 'classnames';
import styles from './team-section.module.css';
import jawwad from '../../public/images/jawwad.jpg';
import { getImages } from '../../firebase/firebase';
import ImageSlider from '../image-slider/image-slider.component';
import ImageGallery from '../image-slider/image-slider.component';


function TeamSection() {
  return (
    <section className={cls(styles.teamSection,'pt-24','pb-7')}>
      <div className='mx-auto max-w-7xl pl-5 pr-5'>
        <h5 className={cls('uppercase text-center mb-2', styles.tagLine)}>The talent behind everything</h5>
        <h2 className={cls('text-center pb-20',styles.mainTitle)}>Meet our awesome team</h2>
        {/* <img src="https://via.placeholder.com/1600x500" alt="" /> */}
        {/* <ImageGallery /> */}
        <div className={cls('grid grid-cols-1 md:grid-cols-2 teamMembers clear-both')}>
          
          <div className={cls(styles.memberCard,'clear-both item ml-5 mr-5 mb-5 relative overflow-hidden block')}>
            <div className={cls(styles.memberImage,'clear-both')}>
              <img src={jawwad.src} alt="Team member" />  
            </div>  
            <div className={cls(styles.memberDetails)}>
              <h3 className={cls(styles.memberName)}>Jawwad Kazmi</h3>
              <div className={cls(styles.memberPosition)}>Founder & CEO</div>
              <div className={cls(styles.memberSocial)}>
                <a href='#'><i className="lab la-facebook-f"></i></a>
                <a href='#'><i className="lab la-twitter"></i></a>
                <a href='#'><i className="lab la-pinterest-p"></i></a>
              </div>
            </div>
          </div>

          <div className={cls(styles.memberCard,'clear-both item ml-5 mr-5 mb-5 relative overflow-hidden block')}>
            <div className={cls(styles.memberImage,'clear-both')}>
              <img src={one.src} alt="Team member" />  
            </div>  
            <div className={cls(styles.memberDetails)}>
              <h3 className={cls(styles.memberName)}>Zia ur Rehman</h3>
              <div className={cls(styles.memberPosition)}>Architect</div>
              <div className={cls(styles.memberSocial)}>
                <a href='#'><i className="lab la-facebook-f"></i></a>
                <a href='#'><i className="lab la-twitter"></i></a>
                <a href='#'><i className="lab la-pinterest-p"></i></a>
              </div>
            </div>
          </div>

          <div className={cls(styles.memberCard,'clear-both item ml-5 mr-5 mb-5 relative overflow-hidden block')}>
            <div className={cls(styles.memberImage,'clear-both')}>
              <img src={two.src} alt="Team member" />  
            </div>  
            <div className={cls(styles.memberDetails)}>
              <h3 className={cls(styles.memberName)}>Abdullah Muhammad</h3>
              <div className={cls(styles.memberPosition)}>Interior Designer</div>
              <div className={cls(styles.memberSocial)}>
                <a href='#'><i className="lab la-facebook-f"></i></a>
                <a href='#'><i className="lab la-twitter"></i></a>
                <a href='#'><i className="lab la-pinterest-p"></i></a>
              </div>
            </div>
          </div>

          <div className={cls(styles.memberCard,'clear-both item ml-5 mr-5 mb-5 relative overflow-hidden block')}>
            <div className={cls(styles.memberImage,'clear-both')}>
              <img src={three.src} alt="Team member" />  
            </div>            
            <div className={cls(styles.memberDetails)}>
              <h3 className={cls(styles.memberName)}>Zohaib Khan</h3>
              <div className={cls(styles.memberPosition)}>Project Manager</div>
              <div className={cls(styles.memberSocial)}>
                <a href='#'><i className="lab la-facebook-f"></i></a>
                <a href='#'><i className="lab la-twitter"></i></a>
                <a href='#'><i className="lab la-pinterest-p"></i></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default TeamSection