import { Link } from "react-router-dom";

function Checkout() {
  return (
    <>
      <h1>Purchase completed successfully</h1>
      <Link to={"/"} className="btn btn-primary">
        Return to home
      </Link>
    </>
  );
}

export default Checkout;
