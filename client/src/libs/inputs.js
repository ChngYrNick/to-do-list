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

  return (
    <Fragment>
      <div className="modalContent">
        <Input {...titleInput} />
      </div>
      <div className="btns">
        <button
          className="btn"
          onClick={e => {
            e.preventDefault();
            unmountInputModal();
          }}
        >
          Cancel
        </button>
        <button
          className="btn"
          onClick={e => {
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
          }}
        >
          Submit
        </button>
      </div>
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

  return (
    <Fragment>
      <div className="modalContent">
        <Input {...titleInput} />
      </div>
      <div className="btns">
        <button
          className="btn"
          onClick={e => {
            e.preventDefault();
            unmountInputModal();
          }}
        >
          Cancel
        </button>
        <button
          className="btn"
          onClick={e => {
            e.preventDefault();
            addTask(form.values.term).then(res => {
              if (res.status === 200) {
                updateData([...data, res.data]);
              }
            });
            unmountInputModal();
          }}
        >
          Submit
        </button>
      </div>
    </Fragment>
  );
}
