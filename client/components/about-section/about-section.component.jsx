import React from 'react';
import cls from 'classnames';
import styles from './about-section.module.css';
import Link from 'next/link';

function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className='mx-auto max-w-7xl pl-10 pr-10'>
        <div className={cls(styles.aboutArch)}>
          <div className={cls('grid','xs:grid-cols-1','md:grid-cols-2','container', 'mx-auto', 'max-w-7xl')}>
              <div className={cls('xs:pr-30 md:pr-36 mt-40 pl-5 pb-20',styles.aboutTitle)}><h3>Architecture is about experience, not only visual</h3></div>
              <div className={cls('xs:mt-6 md:mt-40 pt-20')}>
                  <p className={cls(' pl-5 pr-5 pb-10',styles.aboutPara)}>Kazmi&apos;s Architects is a Karachi based studio practice focused on modern design, interiors and landscapes. 
                From our inception in 2018, we have delivered exceptional public and private environments that are stimulating
                 to occupy and fundamental to their surroundings. As a full-service firm, Kazmi&apos;s is present on projects from start to finish.
                 </p>
                 <Link className={cls('ml-5 mr-5',styles.actionButton)} href="/portfolio">View All Works </Link>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection