import React, { Fragment } from "react";
import { useForm, useInput } from "../helpers/forms";
import Input from "../components/Input";

export function EditInput(props) {
  const { unmountInputModal, editTask, id, term, updateData, data } = props;

  const form = useForm();

  const titleInput = useInput(
    {
      name: "term",
      label: "Enter title",
      defaultValue: term
    },
    form
  );

  const handleCancelClick = e => {
    e.preventDefault();
    unmountInputModal();
  };

  const handleSubmitClick = e => {
    e.preventDefault();
    editTask(form.values.term, id).then(res => {
      if (res.status === 200) {
        updateData(
          data.map(val => {
            return val._id !== id
              ? val
              : {
                  title: form.values.term,
                  _id: id,
                  date: res.data.date
                };
          })
        );
      }
    });
    unmountInputModal();
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmitClick}>
        <div className="modalContent">
          <Input {...titleInput} />
        </div>
        <div className="btns">
          <button className="btn" onClick={handleCancelClick} type="button">
            Cancel
          </button>
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </Fragment>
  );
}

export function AddInput(props) {
  const { unmountInputModal, addTask, updateData, data } = props;

  const form = useForm();

  const titleInput = useInput(
    {
      name: "term",
      label: "Enter title"
    },
    form
  );

  const handleSubmitClick = e => {
    e.preventDefault();
    addTask(form.values.term).then(res => {
      if (res.status === 200) {
        updateData([...data, res.data]);
      }
    });
    unmountInputModal();
  };

  const handleCancelClick = e => {
    e.preventDefault();
    unmountInputModal();
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmitClick}>
        <div className="modalContent">
          <Input {...titleInput} />
        </div>
        <div className="btns">
          <button className="btn" type="button" onClick={handleCancelClick}>
            Cancel
          </button>
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </Fragment>
  );
}
