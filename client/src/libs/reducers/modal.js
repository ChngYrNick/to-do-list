import { MOUNT_MODAL, UNMOUNT_MODAL } from "../actions";

const initialState = {
  title: "",
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {},
  children: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOUNT_MODAL:
      const { title, onCancel, onSubmit, children } = action.modal;
      return {
        title,
        onCancel,
        onSubmit,
        children,
        isOpen: true
      };

    case UNMOUNT_MODAL:
      return {
        title: "",
        isOpen: false,
        onCancel: () => {},
        onSubmit: () => {},
        children: null
      };
    default:
      return state;
  }
};
