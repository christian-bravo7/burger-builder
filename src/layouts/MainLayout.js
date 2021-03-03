import React, { Component } from 'react';
import proptypes from 'prop-types';

class MainLayout extends Component {
  render () {
    return (
      <main>
        <nav>Navbar</nav>
        <section>{this.props.children}</section>
      </main>
    );
  }
}

MainLayout.propTypes = {
  children: proptypes.element,
};

export default MainLayout;
