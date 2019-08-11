import axios from "axios";

export const getList = () => {
  return axios
    .get("/api/tasks", {
      headers: { "Content-Type": "application/json" }
    })
    .then(res => {
      return res.data;
    });
};

export const addTask = term => {
  return axios
    .post(
      "/api/task",
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
    .delete(`/api/task/${term}`, {
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
      `/api/task/${id}`,
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
