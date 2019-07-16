import React, { useState, useEffect } from "react";

import TaskList from "../components/TaskList";
import ToolBar from "../components/ToolBar";
import SearchBar from "../components/SearchBar";
import { getList } from "../libs/TasksFunctions";

import "./TaskPage.scss";

function TaskPage() {
  const [data, setData] = useState(null);
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    getList().then(data => {
      setData(data);
      setInitialData(data);
    });
    console.log("Component did mount!");
  }, []);

  if (!initialData) return null;

  return (
    <div className="task-page">
      <div className="toolbar">
        <SearchBar data={initialData} update={setData} />
        <ToolBar initialData={initialData} data={data} update={setData} />
      </div>
      <TaskList data={data} />
    </div>
  );
}

export default TaskPage;
