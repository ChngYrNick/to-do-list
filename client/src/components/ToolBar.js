import React, { useState } from "react";

function Toolbar(props) {
  const [sorted, setSorted] = useState({ title: true, date: true });

  const sort = type => {
    const { update, data } = props;

    const isSorted = sorted[type];

    let direction = isSorted ? 1 : -1;

    const sortedData = [].slice.call(data).sort((a, b) => {
      return a[type] === b[type]
        ? 0
        : a[type] > b[type]
        ? direction
        : direction * -1;
    });

    const temp = {};
    for (let key in sorted) {
      if (key === type) {
        temp[key] = !isSorted;
      } else {
        temp[key] = sorted[key];
      }
    }

    setSorted(temp);

    update(sortedData);
  };

  const reset = () => {
    const { initialData, update } = props;
    update(initialData);
  };

  return (
    <div className="btns">
      <button className="btn" onClick={() => sort("title")}>
        Sort by title
      </button>
      <button className="btn" onClick={() => sort("date")}>
        Sort by date
      </button>
      <button className="btn" onClick={() => reset()}>
        Reset
      </button>
      <button className="add-btn">Add</button>
    </div>
  );
}

export default Toolbar;
