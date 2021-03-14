import BurgerLogo from '@/assets/burger-logo.png';

import classes from '@/components/App/Logo/Logo.module.scss';

const AppLogo = () => {
  return (
    <a className={classes.AppLogo}>
      <img className={classes.AppLogo__Image} src={BurgerLogo}></img>
    </a>
  );
};

export default AppLogo;
