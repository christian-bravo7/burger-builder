import React from 'react';
import proptypes from 'prop-types';

import Navbar from '@/components/App/Navbar/Navbar';

import classes from '@/layouts/MainLayout.module.scss';

const MainLayout = ({ children }) => {
  return (
    <main className={classes.MainLayout}>
      <Navbar />
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
