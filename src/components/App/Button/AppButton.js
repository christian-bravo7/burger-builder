import proptypes from 'prop-types';

import classes from '@/components/App/Button/AppButton.module.css';

const AppButton = ({ children, className, ...props }) => {
  return (
    <button
      className={`${classes.AppButton} ${className}`}
      {...props}
    >
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
};

export default AppButton;
