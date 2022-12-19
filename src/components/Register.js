import { Input } from "./ui";
import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

          <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">
            Register
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