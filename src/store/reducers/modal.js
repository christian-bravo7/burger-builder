import {
  DISPLAY_MODAL_WITH_COMPONENT,
  HIDDE_MODAL,
} from '@/store/actions/modal';

const initialState = {
  isActive: false,
  component: null,
  title: '',
};

const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DISPLAY_MODAL_WITH_COMPONENT:
      return displayModal(state, payload);
    case HIDDE_MODAL:
      return hiddeModal(state);
    default:
      return state;
  }
};

const displayModal = (state, { component = null, title = '' }) => ({
  title,
  component,
  isActive: true,
});

const hiddeModal = () => ({
  title: '',
  component: null,
  isActive: false,
});

export default modalReducer;
