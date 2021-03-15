import React from 'react';
import proptypes from 'prop-types';

import AppLogo from '@/components/App/Logo/Logo';
import NavbarItem from '@/components/App/NavbarItem/NavbarItem';

import classes from '@/components/App/Navbar/Navbar.module.scss';
import MenuButton from '@/components/App/MenuButton/MenuButton';

const Navbar = ({ onOpenSidebar }) => {
  return (
    <nav className={classes.Navbar}>
      <AppLogo />
      <div className={classes.Navbar__Links}>
        <NavbarItem to="/" label="Burger Builder" />
        <NavbarItem to="/" label="Checkout" />
      </div>
      <div className={classes.Navbar__Menu}>
        <MenuButton onClick={onOpenSidebar} />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  onOpenSidebar: proptypes.func.isRequired,
};

export default Navbar;
