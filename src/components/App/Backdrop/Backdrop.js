import { useRef } from 'react';
import proptypes from 'prop-types';

import classes from '@/components/App/Backdrop/Backdrop.module.scss';

const AppBackdrop = ({ onClick }) => {
  const backdropRef = useRef(null);

  const handleBackdropClick = event => {
    if (event.target === backdropRef.current) {
      onClick();
    }
  };

  return (
    <div
      ref={backdropRef}
      className={classes.AppBackdrop}
      onClick={handleBackdropClick}
    />
  );
};

AppBackdrop.propTypes = {
  children: proptypes.oneOfType([
    proptypes.element,
    proptypes.string,
  ]),
  onClick: proptypes.func,
};

export default AppBackdrop;
