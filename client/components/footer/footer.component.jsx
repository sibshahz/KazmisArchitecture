import cls from 'classnames';
import React from 'react';
import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={cls('mx-auto max-w-7xl pl-5 pr-5')}>
      <div className={cls(styles.footerContainer,'pl-5 pr-5 grid gap-0 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-2 xs:place-content-center')}>
        <div className={styles.footerCol}>
          <h3 className={styles.footerTitle}>
            Kazmi&apos;s
          </h3>
          <p className={cls(styles.footerContent,styles.tagline)}>We work closely with clients to gain an understanding of your desires both philoso phical and practical.</p>
          <span className={styles.copyright}>Copyright ©2023 <a href='http://shahidgillani.netlify.app'>Shahid Gillani</a>.
          All Rights Reserved.</span>
        </div>
        <div className={styles.footerCol}>
          <h3 className={styles.footerTitle}>
            Contact
          </h3>
          <div className={cls(styles.footerContent,styles.contactText)}>
            <p>124th Street DHA, Karachi</p>
            <p>T. +92308-5736457</p>
            <p>E. kazmis@kazmisgroup.com</p>
          </div>
        </div>
        <div className={styles.footerCol}>
          <h3 className={styles.footerTitle}>
            Follow us
          </h3>
          <div className={cls(styles.footerContent,styles.socialIcons)}>
            <a href='#'><i className="lab la-facebook-f"></i><span>Facebook</span></a>
            <a href='#'><i className="lab la-twitter"></i><span>Twitter</span></a>
            <a href='#'><i className="lab la-pinterest-p"></i><span>Pinterest</span></a>
          </div>
        </div>
      </div>
      </div>
  </footer>
  )
}

export default Footer;