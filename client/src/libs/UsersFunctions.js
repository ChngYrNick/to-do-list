import axios from "axios";

export const signIn = (login, password) => {
  return axios
    .post(
      "/api/auth/signin",
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
      "/api/auth/signup",
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
    .get("/api/user", {
      headers: { "Content-Type": "application/json" }
    })
    .then(res => {
      return res.data;
    });
};
