import axios from "axios";

export const signIn = (login, password) => {
  return axios
    .post(
      "http://localhost:3001/api/auth/signin",
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
      "http://localhost:3001/api/auth/signup",
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
