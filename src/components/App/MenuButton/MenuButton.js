import proptypes from 'prop-types';

import menuIcon from '@/assets/menu.png';

import classes from '@/components/App/MenuButton/MenuButton.module.scss';

const MenuButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={classes.MenuButton}>
      <img
        className={classes.MenuButton__Image}
        src={menuIcon}
        alt="Menu"
      ></img>
    </button>
  );
};

MenuButton.propTypes = {
  onClick: proptypes.func.isRequired,
};

export default MenuButton;
