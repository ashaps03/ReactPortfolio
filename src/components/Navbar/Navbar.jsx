import React, {useState} from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';

const Navbar = () => {
  return(
    <nav className= {styles.navbar}>
        <a className= {styles.title} thref='/'>Portfolio</a>
        <div className= {styles.menu}>
            <img className= {styles.menuBtn} src={getImageUrl('nav/menuIcon.png')} alt='Menu' />
            <ul className= {styles.menuItems}>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contacts'>Contact</a></li>
            </ul>
        </div>
    </nav>
  );
};

export default Navbar;