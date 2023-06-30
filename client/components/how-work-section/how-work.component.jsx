import React from 'react';
import cls from 'classnames';
import styles from './how-work.module.css';
import howwework from '../../public/images/howwework.jpg';
import Image from 'next/image';
import logoOne from '../../public/images/logo01-1.png';
import logoTwo from '../../public/images/logo02-1.png';
import logoThree from '../../public/images/logo03-1.png';
import { motion } from 'framer-motion';
import { popUp } from '../animations/animations';
function HowWork() {
  let notPlayed=true;
  const entered=(bol,target="")=>{
    if(bol && notPlayed){
      popUp(target);
      notPlayed=false;
    }else{
      return;
    }

  }
  return (
    <section>
      <div className={cls('grid xs:grid-cols-1 md:grid-cols-2 container mx-auto max-w-7xl pl-5 pr-5')}>
        <motion.div
           transition={{ type:'spring',bounce: 0.40 }}
           initial={{ opacity: 0.4 }}
           whileInView={{ opacity: 1 }}   
        className={cls(styles.approach)}>
          <motion.div 
          transition={{ type:'spring',delay:0.2,bounce: 0.40,duration:1.4 }}
          initial={{ opacity: 0,scale:0.88 }}
          whileInView={{ opacity: 1,scale:1 }}
          viewport={{ once: true }}
          className={cls(styles.approachItem)}>
            <div className={cls(styles.icon)}>
              <Image src={logoOne} />
            </div>
            <div className={cls(styles.approachDetails)}>
              <h3>Design Approach</h3>
              <p>We work closely with clients to gain an understanding of your desires both philoso phical and practical.</p>
              <div className={cls(styles.borderbottom)}></div>
            </div>
          </motion.div>

          <motion.div
          transition={{ type:'spring',delay:0.4,bounce: 0.40,duration:1.4 }}
          initial={{ opacity: 0,scale:0.88 }}
          whileInView={{ opacity: 1,scale:1 }}
          viewport={{ once: true }}
          className={cls(styles.approachItem)}>
            <div className={cls(styles.icon)}>
            <Image src={logoTwo} />
            </div>
            <div className={cls(styles.approachDetails)}>
              <h3>Innovative Solutions</h3>
              <p>We work closely with clients to gain an understanding of your desires both philoso phical and practical.</p>
              <div className={cls(styles.borderbottom)}></div>
            </div>
          </motion.div>

          <motion.div
          transition={{ type:'spring',delay:0.6,bounce: 0.40,duration:1.4 }}
          initial={{ opacity: 0,scale:0.88 }}
          whileInView={{ opacity: 1,scale:1 }}
          viewport={{ once: true }}
          className={cls(styles.approachItem)}>
            <div className={cls(styles.icon)}>
              <Image src={logoThree} />
            </div>
            <div className={cls(styles.approachDetails)}>
              <h3>Project Management</h3>
              <p>We work closely with clients to gain an understanding of your desires both philoso phical and practical.</p>
              <div className={cls(styles.borderbottom)}></div>
            </div>
          </motion.div>

        </motion.div>

        <motion.div
        // transition={{ type:'spring',bounce: 0.40,duration:1.4 }}
        // initial={{ opacity: 0,x:80 }}
        // whileInView={{ opacity: 1,x:0 }}
        // viewport={{ once: true }}
        className={cls('pl-5 pr-5 imageWork')}
        onViewportEnter={()=>entered(true,'.imageWork')}
        onViewportLeave={()=>entered(false)} 
        >
          <Image src={howwework}></Image>
        </motion.div>

      </div>
    </section>
  )
}

export default HowWork;