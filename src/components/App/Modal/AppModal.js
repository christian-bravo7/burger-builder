import proptypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppBackdrop from '@/components/App/Backdrop/Backdrop';
import CloseButton from '@/components/App/CloseButton/CloseButton';

import { hiddeModal } from '@/store/actionCreators/modal';

import classes from '@/components/App/Modal/AppModal.module.scss';

const AppModal = ({ component, title, hiddeModal }) => {
  return (
    <div className={classes.AppModal}>
      <AppBackdrop onClick={hiddeModal} />
      <div className={classes.AppModal__Card_Container}>
        <div className={classes.AppModal__CardScrollContainer}>
          <div className={classes.AppModal__Card}>
            <h3 className={classes.AppModal__Card_Title}>{title}</h3>
            <div className={classes.AppModal__Card_Content}>
              {component}
            </div>
          </div>
        </div>
        <CloseButton
          className={classes.AppModal__CloseButton}
          onClick={hiddeModal}
        />
      </div>
    </div>
  );
};

AppModal.propTypes = {
  component: proptypes.oneOfType([
    proptypes.element,
    proptypes.string,
  ]),
  title: proptypes.string,
  hiddeModal: proptypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    component: state.modal.component,
    title: state.modal.title,
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ hiddeModal }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppModal);
