import axios from "axios";

export const signIn = (login, password) => {
  return axios
    .post(
      "https://task-list-react-server.herokuapp.com:3001/api/auth/signin",
      {
        login,
        password
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    )
    .then(response => {
      return response;
    });
};

export const signUp = (login, password) => {
  return axios
    .post(
      "https://task-list-react-server.herokuapp.com:3001/api/auth/signup",
      {
        login,
        password
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    )
    .then(response => {
      return response;
    });
};

export const getUserInfo = () => {
  return axios
    .get("https://task-list-react-server.herokuapp.com:3001/api/user", {
      headers: { "Content-Type": "application/json" }
    })
    .then(res => {
      return res.data;
    });
};
