import React from "react";
import { connect } from "react-redux";

import Input from "../components/Input";
import { logIn } from "../libs/actions";
import { signIn } from "../libs/UsersFunctions";
import { useForm, useInput } from "../helpers/forms";

import "./AuthPage.scss";

function SigninPage(props) {
  const form = useForm();
  const loginInput = useInput(
    {
      name: "login",
      label: "Login",
      type: "login"
    },
    form
  );

  const passwordInput = useInput(
    {
      name: "password",
      label: "Password",
      type: "password"
    },
    form
  );

  return (
    <div className="auth-page">
      <div className="content">
        <div className="box">
          <div className="title">Sign in</div>
          <div className="body">
            <Input {...loginInput} />
            <Input {...passwordInput} />
          </div>
          <div className="btns">
            <button
              className="btn"
              onClick={e => {
                e.preventDefault();
                const { login, password } = form.values;
                signIn(login, password).then(res => {
                  if (res.status === 200) {
                    const { login, token } = res.data;
                    props.logIn({ login, token });
                    props.history.push("/");
                  }
                });
              }}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  logIn: event => dispatch(logIn(event))
});

export default connect(
  null,
  mapDispatchToProps
)(SigninPage);
