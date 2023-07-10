import { Link } from "react-router-dom";

function Product(props) {
  return (
    <div className="card col-3-5 mx-1 mb-4 border-0">
      <Link to={`/products/${props.id}`} className="btn text-start p-0">
        <img
          // TODO: Put a placeholder image if props.image leads to broken image... need to fiddle with status code
          src={props.image}
          className="card-img-top rounded-0"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title mt-2 mb-2 fw-bold lh-normal">
            {props.title}
          </h5>
          <p className="card-text">${props.price}</p>
        </div>
      </Link>
    </div>
  );
}

export default Product;
