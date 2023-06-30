import React,{useRef} from 'react';
import cls from "classnames";
import styles from './navbar.module.css';
import Link from 'next/link';


function Navbar() {
  const checkbox = useRef();
  const handleClick=()=>{
    if(checkbox.current.checked){
      checkbox.current.checked=false;
    }
  }
  return (

    <div className={cls(styles.headContainer,'')}>
          <input type="checkbox" ref={checkbox} name="checkbox" id="checkbox" className={cls(styles.checkbox)} />
          
          <label htmlFor="checkbox" className={cls(styles.hamburger)}>
            <span className={cls(styles.burger)}>&nbsp;</span>
          </label>
          <div className={cls(styles.navBackground)}>&nbsp;</div>
          <nav id="nav" className={cls(styles.nav)}>
            <ul>
                <li onClick={handleClick}><Link href="/">Home</Link></li>
                <li onClick={handleClick}><Link href="/services">Services</Link></li>
                <li onClick={handleClick}><Link href="/portfolio">Portfolio</Link></li>
                <li onClick={handleClick}><Link href="/about">About</Link></li>
                <li onClick={handleClick}><Link href="contact">Contact</Link></li>
            </ul>
          </nav>
    </div>
  )
}

export default Navbar;