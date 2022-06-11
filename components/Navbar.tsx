import React from 'react';

import styles from './NavBar.module.css';
import { ActiveLink } from './ActiveLink';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

const Navbar = () => {
  return (
    <nav className={ styles.menu }>
      {
        menuItems.map((item) => {
          return ( <ActiveLink text={`${item.text}`} href={item.href} key={item.text}/> )
        })
        // menuItems.map((item) => (<ActiveLink text={`${item.text}`} href={item.href} key={item.text}></ActiveLink>))
        
      }
    </nav>
  )
}

export default Navbar