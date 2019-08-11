import React, { useState } from "react";

import "./SearchBar.scss";

function SearchBar(props) {
  const [term, setTerm] = useState("");

  const handleChange = e => {
    const value = e.target.value.toString();
    setTerm(value);
    if (props.data) {
      const filter = props.data.filter(task => {
        return task.title.includes(value);
      });

      props.update(filter);
    }
  };

  return (
    <input
      className="searchbar-input"
      value={term}
      type="text"
      placeholder="Search for task"
      onChange={handleChange}
    />
  );
}

export default SearchBar;
