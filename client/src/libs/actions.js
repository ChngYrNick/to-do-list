//me
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const logIn = me => ({
  type: LOGIN,
  me
});

export const logOut = () => ({
  type: LOGOUT
});

//modal window
export const MOUNT_MODAL = "MOUNT_MODAL";
export const UNMOUNT_MODAL = "UNMOUNT_MODAL";

export const mountModal = modal => ({
  type: MOUNT_MODAL,
  modal
});

export const unmountModal = () => ({
  type: UNMOUNT_MODAL
});

//modal input window
export const MOUNT_INPUT_MODAL = "MOUNT_INPUT_MODAL";
export const UNMOUNT_INPUT_MODAL = "UNMOUNT_INPUT_MODAL";

export const mountInputModal = inputModal => ({
  type: MOUNT_INPUT_MODAL,
  inputModal
});

export const unmountInputModal = () => ({
  type: UNMOUNT_INPUT_MODAL
});
