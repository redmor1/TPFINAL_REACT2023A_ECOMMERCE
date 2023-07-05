import { Link } from "react-router-dom";

function Product(props) {
  return (
    <div className="card col-3 mx-1 mb-5 border-0">
      <Link to={`/products/${props.id}`} className="btn text-start">
        <img src={props.image} className="card-img-top rounded-0" alt="..." />
        <div className="card-body">
          <h5 className="card-title mt-2 fw-bold">{props.title}</h5>
          <p className="card-text">${props.price}</p>
        </div>
      </Link>
    </div>
  );
}

export default Product;
