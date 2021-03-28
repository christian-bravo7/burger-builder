import proptypes from 'prop-types';
import { Component } from 'react';

import Navbar from '@/components/App/Navbar/Navbar';
import Sidebar from '@/components/App/Sidebar/Sidebar';

import classes from '@/layouts/Main/MainLayout.module.scss';

class MainLayout extends Component {
  state = {
    isSidebarActive: false,
  };

  openSidebar = () => {
    this.setState(() => ({ isSidebarActive: true }));
  };

  closeSidebar = () => {
    this.setState(() => ({ isSidebarActive: false }));
  };

  render () {
    return (
      <main className={classes.MainLayout}>
        <Navbar onOpenSidebar={this.openSidebar} />
        {this.state.isSidebarActive ? (
          <Sidebar onClose={this.closeSidebar} />
        ) : null}
        <section className={classes.MainLayout__Content}>
          {this.props.children}
        </section>
      </main>
    );
  }
}

MainLayout.propTypes = {
  children: proptypes.oneOfType([proptypes.element, proptypes.array]),
};

export default MainLayout;
