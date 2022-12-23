import { Input } from "./ui";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUserStart, signUserSuccess, signUserFailure } from "../slice/Auth";
import AuthService from "../service/AuthService";
import { ValidationError } from "./index.jsx";
import { useNavigate } from "react-router-dom";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, loggedIn } = useSelector((state) => state.auth);

  const registerHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { username: name, email, password };
    try {
      const response = await AuthService.userRegister(user);
      console.log(response);
      console.log(user);
      dispatch(signUserSuccess(response.user));
    } catch (error) {
      console.log(error.message);
      dispatch(signUserFailure(error.response.data.errors));
    }
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, []);

  return (
    <div className="text-center mt-5">
      <main className="form-signin w-25 container">
        <form>
          <img
            className="mb-4 register-img"
            src="./images/logo.png"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please register</h1>
          <ValidationError />
          <Input label={"Username"} state={name} setState={setName} />
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
            onClick={registerHandler}
            className="w-100 btn btn-lg btn-primary mt-3"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading...." : "Register"}
          </button>
          <p className="mt-5 mb-3 text-muted">
            © 2017 - {new Date().getFullYear()}
          </p>
        </form>
      </main>
    </div>
  );
}

export default Register;
