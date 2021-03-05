import React, { Component } from 'react';
import proptypes from 'prop-types';
import classes from '@/layouts/MainLayout.module.css';

class MainLayout extends Component {
  render () {
    return (
      <main className={classes.MainLayout}>
        <nav>Navbar</nav>
        <section className={classes.MainLayout__Content}>
          {this.props.children}
        </section>
      </main>
    );
  }
}

MainLayout.propTypes = {
  children: proptypes.element,
};

export default MainLayout;
