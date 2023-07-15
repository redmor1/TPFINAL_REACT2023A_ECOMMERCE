import { Link } from "react-router-dom";

function Admin() {
  return (
    <div>
      <h1>Admin stuff</h1>

      <Link to="/products/create" className="btn btn-primary">
        Create a product
      </Link>
      <Link to="/products/edit/:id" className="btn btn-primary">
        Edit a product
      </Link>
      <Link to="/categories/create" className="btn btn-primary">
        Create a category
      </Link>
      <Link to="/categories/edit/:id" className="btn btn-primary">
        Edit a category
      </Link>
    </div>
  );
}

export default Admin;
