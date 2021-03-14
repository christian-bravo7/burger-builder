import proptypes from 'prop-types';

import classes from '@/components/App/NavbarItem/NavbarItem.module.scss';

const NavbarItem = ({ label, to }) => {
  return (
    <a className={classes.NavbarItem} href={to}>
      {label}
    </a>
  );
};

NavbarItem.propTypes = {
  label: proptypes.string.isRequired,
  to: proptypes.string.isRequired,
};

export default NavbarItem;
