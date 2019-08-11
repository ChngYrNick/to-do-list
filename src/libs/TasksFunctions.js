import axios from "axios";

export const getList = () => {
  return axios
    .get("http://localhost:3001/api/tasks", {
      headers: { "Content-Type": "application/json" }
    })
    .then(res => {
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
    .then(response => {
      return response;
    });
};

export const deleteTask = term => {
  return axios
    .delete(`http://localhost:3001/api/task/${term}`, {
      headers: { "Content-Type": "application/json" }
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });
};

export const editTask = (term, id) => {
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
    .then(response => {
      return response;
    });
};
