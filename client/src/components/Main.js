import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";

import SignupPage from "../pages/SignupPage";
import SigninPage from "../pages/SigninPage";
import TaskPage from "../pages/TaskPage";
import NotFoundPage from "../pages/NotFoundPage";
import UserInfoPage from "../pages/UserInfoPage";
import { logIn } from "../libs/actions";

import "./Main.scss";

function Main(props) {
  return (
    <main className="main">
      <Switch>
        {!props.me.token && <Redirect from="/" to="/signin" exact />}
        {!props.me.token && <Redirect from="/user" to="/signin" exact />}
        {!props.me.token && <Route path="/signup" component={SignupPage} />}
        {!props.me.token && <Route path="/signin" component={SigninPage} />}
        {props.me.token && <Route path="/user" component={UserInfoPage} />}
        {props.me.token && <Route path="/" component={TaskPage} />}
        <Route component={NotFoundPage} />
      </Switch>
    </main>
  );
}

const mapStateToProps = store => {
  return {
    me: store.me
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: me => dispatch(logIn(me))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
