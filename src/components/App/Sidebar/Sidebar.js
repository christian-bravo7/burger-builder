import proptypes from 'prop-types';

import AppBackdrop from '@/components/App/Backdrop/Backdrop';

import classes from '@/components/App/Sidebar/Sidebar.module.scss';
import CloseButton from '@/components/App/CloseButton/CloseButton';
import SidebarItem from '@/components/App/SidebarItem/SidebarItem';

const Sidebar = ({ onClose }) => {
  return (
    <div className={classes.Sidebar}>
      <AppBackdrop onClick={onClose} />
      <div className={classes.Sidebar__Card}>
        <div className={classes.Sidebar__CardHeader}>
          <CloseButton onClick={onClose} />
        </div>
        <div className={classes.Sidebar__CardBody}>
          <SidebarItem to="/" label="Burger Builder" />
          <SidebarItem to="/" label="Checkout" />
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  onClose: proptypes.func,
};

export default Sidebar;
