import { Link } from "react-router-dom";

function Product(props) {
  return (
    <div className="card col-2 mx-3 mb-5">
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text"></p>
        <Link to={`/products/${props.id}`} className="btn btn-primary">
          Go somewhere
        </Link>
      </div>
    </div>
  );
}

export default Product;
