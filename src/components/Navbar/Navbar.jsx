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
            <form role="search">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
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
                Carrito
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
