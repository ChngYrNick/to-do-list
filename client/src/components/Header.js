import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { logOut } from "../libs/actions";

import "./Header.scss";

function Header(props) {
  const onSignUpClick = e => {
    e.preventDefault();
    props.history.push("/signup");
  };

  const onSignInClick = e => {
    e.preventDefault();
    props.history.push("/signin");
  };

  const onLogOutClick = e => {
    e.preventDefault();
    props.logOut();
  };

  const renderBtns = () => {
    if (props.me.login) {
      return <button onClick={onLogOutClick}>Logout</button>;
    } else if (props.location.pathname === "/signin") {
      return <button onClick={onSignUpClick}>Sign up</button>;
    } else {
      return <button onClick={onSignInClick}>Sign in</button>;
    }
  };

  return (
    <header className="header">
      <div className="logo">Todo App</div>
      <div className="container">
        <div>{props.me.login ? `Welcome, ${props.me.login}!` : "Guest"}</div>
        {renderBtns()}
      </div>
    </header>
  );
}

const mapStateToProps = store => {
  return {
    me: store.me
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: me => dispatch(logOut(me))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
