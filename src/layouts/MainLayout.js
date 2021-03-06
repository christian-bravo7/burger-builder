import React from 'react';
import proptypes from 'prop-types';

import classes from '@/layouts/MainLayout.module.css';

const MainLayout = ({ children }) => {
  return (
    <main className={classes.MainLayout}>
      <nav>Navbar</nav>
      <section className={classes.MainLayout__Content}>
        {children}
      </section>
    </main>
  );
};

MainLayout.propTypes = {
  children: proptypes.element,
};

export default MainLayout;
