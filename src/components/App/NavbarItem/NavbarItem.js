import proptypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import classes from '@/components/App/NavbarItem/NavbarItem.module.scss';

const NavbarItem = ({ label, ...rest }) => {
  return (
    <NavLink className={classes.NavbarItem} {...rest}>
      {label}
    </NavLink>
  );
};

NavbarItem.propTypes = {
  label: proptypes.string.isRequired,
  to: proptypes.string.isRequired,
};

export default NavbarItem;
