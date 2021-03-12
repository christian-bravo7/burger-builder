import React from 'react';
import proptypes from 'prop-types';

import AppBackdrop from '@/components/App/Backdrop/Backdrop';

import classes from '@/components/App/Modal/AppModal.module.scss';

const AppModal = ({ children, title, onClose }) => {
  return (
    <div className={classes.AppModal}>
      <AppBackdrop onClick={onClose} />
      <div className={classes.AppModal__Card_Container}>
        <div className={classes.AppModal__Card}>
          <h3 className={classes.AppModal__Card_Title}>{title}</h3>
          <div className={classes.AppModal__Card_Content}>
            {children}
          </div>
          <button
            className={classes.AppModal__Card_CloseButton}
            onClick={onClose}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};

AppModal.propTypes = {
  children: proptypes.oneOfType([
    proptypes.element,
    proptypes.string,
  ]),
  title: proptypes.string,
  onClose: proptypes.func.isRequired,
};

export default AppModal;
