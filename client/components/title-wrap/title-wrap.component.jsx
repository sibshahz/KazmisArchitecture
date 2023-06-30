import React from "react";
import cls from 'classnames';
import styles from './title-wrap.module.css'


export const TitleWrap = ({title,subtitle}) => {
  return (
    <>
        <div className={cls(styles.titleWrap)}>
          <h1 className={styles.title}>{title}</h1>
          <h4 className={styles.subTitle}>{subtitle}</h4>
          <i className="las la-arrow-down text-5xl"></i>
        </div>
    </>
  )
}
