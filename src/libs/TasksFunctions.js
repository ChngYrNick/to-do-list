import axios from "axios";

export const getList = () => {
  return axios
    .get("https://task-list-react-server.herokuapp.com:8080/api/tasks", {
      headers: { "Content-Type": "application/json" }
    })
    .then(res => {
      return res.data;
    });
};

export const addTask = term => {
  return axios
    .post(
      "https://task-list-react-server.herokuapp.com:8080/api/task",
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
    .delete(
      `https://task-list-react-server.herokuapp.com:8080/api/task/${term}`,
      {
        headers: { "Content-Type": "application/json" }
      }
    )
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
      `https://task-list-react-server.herokuapp.com:8080/api/task/${id}`,
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
