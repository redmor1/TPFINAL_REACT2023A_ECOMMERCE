import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Navbar() {
  const auth = useAuth();

  return (
    <nav
      className="navbar navbar-expand-sm bg-dark py-2-5"
      data-bs-theme="dark"
      aria-label="Navbar"
    >
      <div className="container-fluid col-10">
        <div className="d-flex">
          <Link className="navbar-brand fw-bold me-4" to={"/"}>
            Ecommerce
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample02"
            aria-controls="navbarsExample02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample02">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link me-3"
                  aria-current="page"
                  to={"/products"}
                >
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link me-3" to={"/categories"}>
                  Categories
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link me-3"
                aria-current="page"
                to={"/cart-detail"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="22"
                  viewBox="0 0 19 22"
                  fill="none"
                >
                  <path
                    d="M18.0178 18.4938L16.4885 6.0293C16.4428 5.8043 16.2635 5.625 16.0385 5.625H12.7531V4.36464C12.7531 1.75428 11.3135 0 9.15313 0C6.99277 0 5.55313 1.75428 5.55313 4.36464V5.625H1.99885C1.77385 5.625 1.59455 5.8043 1.54885 6.0293L0.0195675 18.4938C-0.0700815 19.1231 0.154918 19.7981 0.559207 20.2481C0.963505 20.7438 1.59457 21.0128 2.22385 21.0128H15.7697C16.399 21.0128 17.0301 20.7421 17.4344 20.2481C17.8826 19.7999 18.1076 19.1249 18.018 18.4938H18.0178ZM6.45322 4.4084C6.45322 2.78768 7.17394 0.943757 9.15322 0.943757C11.1325 0.943757 11.8532 2.78948 11.8532 4.4084V5.66876H6.45322V4.4084ZM16.8032 19.6643C16.5325 19.935 16.1739 20.1143 15.8136 20.1143H2.22403C1.81973 20.1143 1.45939 19.935 1.23439 19.6643C1.00939 19.3936 0.874037 18.9893 0.919739 18.585L2.40334 6.56867H15.6324L17.1178 18.6291C17.1635 18.9895 17.0282 19.3938 16.8032 19.6645L16.8032 19.6643Z"
                    fill="white"
                  />
                </svg>
              </NavLink>
            </li>
            {/* TODO: simplificar, extraer a una funcion */}
            {!auth.userInfo || !auth.userInfo.isUserValid ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link me-3" to={"/login"}>
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link me-3" to={"/register"}>
                    Register
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {auth.userInfo.data.role === "admin" && (
                  <li className="nav-item">
                    <NavLink className="nav-link me-3" to={"/admin"}>
                      Admin
                    </NavLink>
                  </li>
                )}
                <li className="nav-item">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      auth.logout(() => {});
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
