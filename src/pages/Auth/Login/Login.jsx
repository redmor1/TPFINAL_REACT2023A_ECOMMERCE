import { useState } from "react";
import Alert from "../../../components/Alert";
import useLogin from "../../../hooks/useLogin";

function Login() {
  const [error, setError] = useState();

  const login = useLogin(setError);

  function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let email = formData.get("email");
    let password = formData.get("password");
    let userData = { email, password };
    login.mutate(userData);
  }

  return (
    <div className="container-fluid my-5 mx-auto">
      <div className="row justify-content-center">
        <div className="col-8 d-flex flex-column justify-content-center p-4 bg-white">
          {error && <Alert alertText={error} state={"error"} />}
          <h1 className="mt-0">Welcome Back</h1>
          <p>Login with email</p>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              type="email"
              placeholder="Email"
              className="form-control form-control-lg mb-3"
              name="email"
            ></input>
            <input
              type="password"
              placeholder="Password"
              className="form-control form-control-lg mb-3"
              name="password"
            ></input>
            <button type="submit" className="btn btn-primary mb-3">
              Login
            </button>
          </form>
          <div className="d-flex justify-content-between">
            <div>
              {/* TODO: maybe add logic with localStorage? */}
              <input type="checkbox" id="remember-me"></input>
              <label htmlFor="remember-me">Remember me</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
