import { LOGIN, LOGOUT } from "../actions";

const initialState = {
  login: "",
  token: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        login: action.me.login,
        token: action.me.token
      };

    case LOGOUT:
      return {
        login: "",
        token: ""
      };

    default:
      return state;
  }
};
