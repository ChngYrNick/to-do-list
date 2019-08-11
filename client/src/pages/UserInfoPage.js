import React, { useState, useEffect } from "react";

import "./UserInfoPage.scss";

import { getUserInfo } from "../libs/UsersFunctions";

function UserInfoPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserInfo().then(data => {
      setUser(data);
    });
  }, []);

  const renderInfo = () => {
    const { login, date } = user;

    return (
      <div className="body">
        <div className="name">
          <span>{`Username: ${login}`}</span>
        </div>
        <div className="date">
          <span>{"Registration date:"}</span>
          <span>{new Date(date).toString()}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="user-info-page">
      <div className="content">
        <div className="box">
          <div className="title">User info</div>
          {user ? renderInfo() : null}
        </div>
      </div>
    </div>
  );
}

export default UserInfoPage;
