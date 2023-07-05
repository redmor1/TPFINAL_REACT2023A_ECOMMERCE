function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-sm bg-dark py-2"
      data-bs-theme="dark"
      aria-label="Second navbar example"
    >
      <div className="container-fluid justify-content-around">
        <div className="d-flex">
          <a className="navbar-brand fw-bold me-4" href="#">
            Ecommerce
          </a>
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
                <a className="nav-link me-3" aria-current="page" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3" href="#">
                  Stories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3" href="#">
                  About
                </a>
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
              <a className="nav-link me-3" aria-current="page" href="#">
                Carrito
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-3" href="#">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
