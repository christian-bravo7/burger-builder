import React from 'react';

import AppLogo from '@/components/App/Logo/Logo';
import NavbarItem from '@/components/App/NavbarItem/NavbarItem';

import classes from '@/components/App/Navbar/Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={classes.Navbar}>
      <AppLogo />
      <div className={classes.Navbar__Links}>
        <NavbarItem to="/" label="Burger Builder" />
        <NavbarItem to="/" label="Checkout" />
      </div>
    </nav>
  );
};

export default Navbar;
