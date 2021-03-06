import { useRef } from 'react';
import proptypes from 'prop-types';

import classes from '@/components/App/Backdrop/Backdrop.module.css';

const AppBackdrop = ({ children, onClick }) => {
  const backdropRef = useRef(null);

  const handleBackdropClick = e => {
    if (e.target === backdropRef.current) {
      onClick();
    }
  };

  return (
    <div
      ref={backdropRef}
      className={classes.AppBackdrop}
      onClick={handleBackdropClick}
    >
      {children}
    </div>
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
