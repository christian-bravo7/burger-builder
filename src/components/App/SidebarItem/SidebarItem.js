import proptypes from 'prop-types';

import classes from '@/components/App/SidebarItem/SidebarItem.module.scss';

const SidebarItem = ({ label, to }) => {
  return (
    <a className={classes.SidebarItem} href={to}>
      {label}
    </a>
  );
};

SidebarItem.propTypes = {
  label: proptypes.string.isRequired,
  to: proptypes.string.isRequired,
};

export default SidebarItem;
