import React from 'react';
import cls from 'classnames';
import styles from './experience-section.module.css';

function ExperienceSection() {
  return (
    <section className={cls('pt-24','pb-24')}>
      <div className={cls('mx-auto max-w-7xl pl-5 pr-5')}>
        <div className={cls(styles.expContainer,"grid grid-cols-4 md:grid-cols-4 gap-0 ml-5 mr-5 clear-both")}>
          <div className={cls(styles.expItem)}>
            <div className={cls(styles.digit)}>
              18
            </div>
            <div className={cls(styles.description)}>
              Years
            </div>
            <div className={cls(styles.borderBottom)}>

            </div>
          </div>
          <div className={cls(styles.expItem)}>
            <div className={cls(styles.digit)}>
              22
            </div>
            <div className={cls(styles.description)}>
              Members
            </div>
            <div className={cls(styles.borderBottom)}>

            </div>
          </div>
          <div className={cls(styles.expItem)}>
            <div className={cls(styles.digit)}>
              92
            </div>
            <div className={cls(styles.description)}>
              Projects
            </div>
            <div className={cls(styles.borderBottom)}>

            </div>
          </div>
          <div className={cls(styles.expItem)}>
            <div className={cls(styles.digit)}>
              43
            </div>
            <div className={cls(styles.description)}>
              Awards
            </div>
            <div className={cls(styles.borderBottom)}>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection;