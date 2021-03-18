import proptypes from 'prop-types';

import classes from '@/components/App/Button/AppButton.module.scss';

const AppButton = ({ children, className, isLoading, ...props }) => {
  const buttonClasses = `${classes.AppButton} ${className} ${
    isLoading ? classes.AppButton__IsLoading : ''
  }`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

AppButton.propTypes = {
  children: proptypes.oneOfType([
    proptypes.element,
    proptypes.string,
  ]),
  className: proptypes.string,
  isLoading: proptypes.bool,
};

export default AppButton;
