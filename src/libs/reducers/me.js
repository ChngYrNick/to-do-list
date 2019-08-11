import { LOGIN, LOGOUT } from "../actions";
import setAuthorizationToken from "../../helpers/setAuthorizationToken";

const initialState = {
  login: "",
  token: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      setAuthorizationToken(action.me.token);
      return {
        login: action.me.login,
        token: action.me.token
      };

    case LOGOUT:
      setAuthorizationToken();
      return {
        login: "",
        token: ""
      };

    default:
      return state;
  }
};
