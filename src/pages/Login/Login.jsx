function Login() {
  return (
    <div className="container-fluid my-5 mx-auto">
      <div className="row justify-content-center">
        <div className="col-8 d-flex flex-column justify-content-center p-4 bg-white">
          <h1 className="mt-0">Welcome Back</h1>
          <p>Login with email</p>
          <input
            type="email"
            placeholder="Email"
            className="form-control form-control-lg"
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="form-control form-control-lg"
          ></input>
          <div className="d-flex justify-content-between">
            <div>
              <input type="checkbox" id="remember-me"></input>
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <p>Forgot password?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
