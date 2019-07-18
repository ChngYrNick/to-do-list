import React from "react";
import { connect } from "react-redux";

import { deleteTask, editTask } from "../libs/TasksFunctions";
import { EditInput } from "../libs/inputs";
import {
  mountModal,
  unmountModal,
  mountInputModal,
  unmountInputModal
} from "../libs/actions";

function TaskList(props) {
  const onDelete = id => {
    const { mountModal, unmountModal, update, initialData } = props;

    mountModal({
      title: "Delete Task",
      onCancel: unmountModal,
      onSubmit: () => {
        deleteTask(id).then(res => {
          if (res.status === 200) {
            update(initialData.filter(val => val._id !== id));
          }
        });
        unmountModal();
      },
      children: <p>Are you sure you want to delete this task?</p>
    });
  };

  const onEdit = (id, title) => {
    const { mountInputModal, unmountInputModal, update, initialData } = props;

    mountInputModal({
      title: "Edit task",
      children: (
        <EditInput
          id={id}
          term={title}
          unmountInputModal={unmountInputModal}
          editTask={editTask}
          updateData={update}
          data={initialData}
        />
      )
    });
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
      <div className="box" key={val._id}>
        <div className="text">{val.title}</div>
        <div className="lower-section">
          <div className="date">{`${date.day}/${date.month}/${date.year} ${
            date.hours
          }:${date.minutes}`}</div>
          <div className="btns">
            <button
              className="btn"
              name="edit"
              onClick={() => onEdit(val._id, val.title)}
            >
              Edit
            </button>
            <button
              className="delete-btn"
              name="delete"
              onClick={() => onDelete(val._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  });
}

const mapDispatchToProps = dispatch => ({
  mountModal: event => dispatch(mountModal(event)),
  unmountModal: event => dispatch(unmountModal(event)),
  mountInputModal: event => dispatch(mountInputModal(event)),
  unmountInputModal: event => dispatch(unmountInputModal(event))
});

export default connect(
  null,
  mapDispatchToProps
)(TaskList);
