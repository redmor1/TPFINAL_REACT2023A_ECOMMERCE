import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const registerMutation = useMutation(
    (data) => {
      return fetch("https://api.escuelajs.co/api/v1/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
    {
      onSuccess: () => {
        navigate("/", { replace: true });
      },
    }
  );

  function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let name = formData.get("name");
    let email = formData.get("email");
    let password = formData.get("password");
    let avatar = "https://placehold.co/400";
    let newUser = { name, email, password, avatar };

    registerMutation.mutate(newUser);

    // mutate something
  }

  return (
    <div className="container-fluid my-5 mx-auto">
      <div className="row justify-content-center">
        <div className="col-8 d-flex flex-column justify-content-center p-4 bg-white">
          <h1 className="mt-0">Create an account</h1>
          <p>Register</p>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              type="text"
              placeholder="Name"
              className="form-control form-control-lg"
              name="name"
            ></input>
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
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
