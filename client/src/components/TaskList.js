import React, { Fragment, useState } from "react";

import Modal from "./Modal";
import { deleteTask } from "../libs/TasksFunctions";

function TaskList(props) {
  const [isOpen, setIsOpen] = useState({ edit: false, delete: false });
  const [id, setId] = useState(null);

  const onClick = e => {
    const temp = {};
    for (let key in isOpen) {
      temp[key] = e.target.name === key ? !isOpen[key] : isOpen[key];
    }
    setIsOpen(temp);
  };

  return props.data.map(val => {
    const date = {
      day: new Date(val.date).getDay(),
      month: new Date(val.date).getMonth(),
      year: new Date(val.date).getFullYear(),
      hours: new Date(val.date).getHours(),
      minutes: new Date(val.date).getMinutes()
    };

    for (let key in date) {
      date[key] = date[key].toString().length > 1 ? date[key] : "0" + date[key];
    }

    return (
      <Fragment key={val._id}>
        <div className="box">
          <div className="text">
            {val.title} {val._id}
          </div>
          <div className="lower-section">
            <div className="date">{`${date.day}/${date.month}/${date.year} ${
              date.hours
            }:${date.minutes}`}</div>
            <div className="btns">
              <button className="btn" name="edit" onClick={onClick}>
                Edit
              </button>
              <button className="delete-btn" name="delete" onClick={onClick}>
                Delete
              </button>
            </div>
          </div>
        </div>
        <Modal
          title="Confirmation window"
          isOpen={isOpen.delete}
          onCancel={() => setIsOpen({ edit: false, delete: false })}
          onSubmit={() => {
            deleteTask(val._id);
            setIsOpen({ edit: false, delete: false });
          }}
        >
          <p>Are you sure you want to delete this task? {val._id}</p>
        </Modal>
      </Fragment>
    );
  });
}

export default TaskList;
