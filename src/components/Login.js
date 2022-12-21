import React from "react";
import { Link } from "react-router-dom";
import { Input } from "./ui";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loginUserStart,
  loginUserSuccess,
  loginUserFailure,
} from "../slice/Auth";
import AuthService from "../service/AuthService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  console.log(isLoading);

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(loginUserStart());
    const user = { email, password };

    try {
      const response = await AuthService.userLogin(user);
      console.log(response);
      dispatch(loginUserSuccess());
    } catch (error) {
      dispatch(loginUserFailure());
    }
  };

  return (
    <div className="text-center mt-5">
      <main className="form-signin w-25 container">
        <form>
          <Link to="/">
            <img
              className="mb-4 register-img"
              src="./images/logo.png"
              alt="logo site"
            />
          </Link>
          <h1 className="h3 mb-3 fw-normal">Please login</h1>
          <Input
            label={"Email address"}
            type={"email"}
            state={email}
            setState={setEmail}
          />
          <Input
            label={"Password"}
            type={"password"}
            state={password}
            setState={setPassword}
          />

          <button
            className="w-100 btn btn-lg btn-primary mt-3"
            type="submit"
            onClick={loginHandler}
            disabled={isLoading}
          >
            {isLoading ? "Loading...." : "Login"}
          </button>
          <p className="mt-5 mb-3 text-muted">
            © 2017 - {new Date().getFullYear()}
          </p>
        </form>
      </main>
    </div>
  );
}

export default Login;
