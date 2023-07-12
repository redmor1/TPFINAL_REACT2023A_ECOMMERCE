import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const loginMutation = useMutation(
    (data) => {
      return fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
    {
      onSuccess: (res) => {
        console.log(res);
        navigate("/", { replace: true });
      },
    }
  );

  function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let email = formData.get("email");
    let password = formData.get("password");
    let userLogin = { email, password };

    loginMutation.mutate(userLogin);

    // mutate something
  }

  return (
    <div className="container-fluid my-5 mx-auto">
      <div className="row justify-content-center">
        <div className="col-8 d-flex flex-column justify-content-center p-4 bg-white">
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
              className="form-control form-control-lg"
              name="email"
            ></input>
            <input
              type="password"
              placeholder="Password"
              className="form-control form-control-lg"
              name="password"
            ></input>
            <button type="submit">Login</button>
          </form>
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
