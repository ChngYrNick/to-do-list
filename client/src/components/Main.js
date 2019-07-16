import React, { Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import AuthPage from "../pages/AuthPage";
import TaskPage from "../pages/TaskPage";
import { logIn } from "../libs/actions";

import "./Main.scss";

function Main(props) {
  return (
    <BrowserRouter>
      <Fragment>
        <main className="main">
          <Switch>
            {props.me.token && <Redirect from="/auth" to="/" exact />}
            {!props.me.token && <Route path="/auth" component={AuthPage} />}
            {!props.me.token && <Route path="/" component={TaskPage} />}
          </Switch>
        </main>
      </Fragment>
    </BrowserRouter>
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
