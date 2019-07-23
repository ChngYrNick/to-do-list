import React, { useReducer } from "react";
import { connect } from "react-redux";

import { AddInput } from "../libs/inputs";
import { addTask } from "../libs/TasksFunctions";
import { mountInputModal, unmountInputModal } from "../libs/actions";

function Toolbar(props) {
  const initialState = { title: false, date: false };

  const sort = (state, action) => {
    const { initialData, update, data } = props;

    const type = action.type;

    if (type in state) {
      const isSorted = state[type];

      let direction = isSorted ? 1 : -1;

      const sortedData = [].slice.call(data).sort((a, b) => {
        return a[type] === b[type]
          ? 0
          : a[type] > b[type]
          ? direction
          : direction * -1;
      });

      update(sortedData);
    }

    const { title, date } = state;

    switch (type) {
      case "title":
        return { title: !title, date };
      case "date":
        return { title, date: !date };
      case "reset":
        update(initialData);
        return initialState;
      default:
        throw new Error();
    }
  };

  // eslint-disable-next-line
  const [state, dispatch] = useReducer(sort, initialState);

  const onAdd = () => {
    const {
      mountInputModal,
      unmountInputModal,
      updateInitialData,
      initialData
    } = props;

    mountInputModal({
      title: "Create task",
      children: (
        <AddInput
          unmountInputModal={unmountInputModal}
          addTask={addTask}
          updateData={updateInitialData}
          data={initialData}
        />
      )
    });
  };

  return (
    <div className="btns">
      <button className="btn" onClick={() => dispatch({ type: "title" })}>
        Sort by title
      </button>
      <button className="btn" onClick={() => dispatch({ type: "date" })}>
        Sort by date
      </button>
      <button className="btn" onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
      <button className="add-btn" onClick={() => onAdd()}>
        Add
      </button>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  mountInputModal: event => dispatch(mountInputModal(event)),
  unmountInputModal: event => dispatch(unmountInputModal(event))
});

export default connect(
  null,
  mapDispatchToProps
)(Toolbar);
