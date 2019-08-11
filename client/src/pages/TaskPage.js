import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Modal from "../components/Modal";
import InputModal from "../components/InputModal";
import TaskList from "../components/TaskList";
import ToolBar from "../components/ToolBar";
import SearchBar from "../components/SearchBar";
import { getList } from "../libs/TasksFunctions";

import "./TaskPage.scss";

function TaskPage(props) {
  const [data, setData] = useState([]);
  const [initialData, setInitialData] = useState([]);

  const { modal, inputModal } = props;

  useEffect(() => {
    getList().then(data => {
      setData(data);
      setInitialData(data);
    });
  }, []);

  useEffect(() => {
    setData(initialData);
  }, [initialData.map(val => val.title).join(",")]);

  if (!initialData) return null;

  return (
    <div className="task-page">
      <div className="toolbar">
        <SearchBar data={initialData} update={setData} />
        <ToolBar
          data={data}
          update={setData}
          initialData={initialData}
          updateInitialData={setInitialData}
        />
      </div>
      <TaskList initialData={initialData} data={data} update={setInitialData} />
      <Modal
        isOpen={modal.isOpen}
        title={modal.title}
        onCancel={modal.onCancel}
        onSubmit={modal.onSubmit}
      >
        {modal.children}
      </Modal>
      <InputModal isOpen={inputModal.isOpen} title={inputModal.title}>
        {inputModal.children}
      </InputModal>
    </div>
  );
}

const mapStateToProps = state => ({
  modal: state.modal,
  inputModal: state.inputModal
});

export default connect(mapStateToProps)(TaskPage);
