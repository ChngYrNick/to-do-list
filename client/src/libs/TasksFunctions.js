import axios from "axios";

export const getList = () => {
  return axios
    .get("http://localhost:3001/api/tasks", {
      headers: { "Content-Type": "application/json" }
    })
    .then(res => {
      console.log(res.data);
      return res.data;
    });
};

export const addTask = term => {
  return axios
    .post(
      "http://localhost:3001/api/task",
      {
        title: term,
        date: Date.now()
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    )
    .then(function(response) {
      console.log(response);
    });
};

export const deleteTask = term => {
  axios
    .delete(`http://localhost:3001/api/task/${term}`, {
      headers: { "Content-Type": "application/json" }
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const updateTask = (term, id) => {
  return axios
    .put(
      `http://localhost:3001/api/task/${id}`,
      {
        title: term,
        date: Date.now()
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    )
    .then(function(response) {
      console.log(response);
    });
};
