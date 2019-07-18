import React from "react";

import Input from "../components/Input";
import { signUp } from "../libs/UsersFunctions";
import { useForm, useInput } from "../helpers/forms";

import "./AuthPage.scss";

function SignupPage(props) {
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
          <div className="title">Sign up</div>
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
                signUp(login, password).then(res => {
                  if (res.status === 200) {
                    props.history.push("/signin");
                  }
                });
              }}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
