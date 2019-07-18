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

    const newDate = {
      day: new Date(date).getDay(),
      month: new Date(date).getMonth(),
      year: new Date(date).getFullYear(),
      hours: new Date(date).getHours(),
      minutes: new Date(date).getMinutes()
    };

    return (
      <div className="body">
        <div className="name">
          <span>{`Username: ${login}`}</span>
        </div>
        <div className="date">
          <span>{"Registration date:"}</span>
          <span>
            {`${newDate.day}/${newDate.month}/${newDate.year} ${
              newDate.hours
            }:${newDate.minutes}`}
          </span>
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
