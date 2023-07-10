import { Link } from "react-router-dom";

function CategoryCard(props) {
  return (
    <div className="card col-3-5 mx-1 mb-4 border-0">
      {/* TODO: Put a placeholder image if props.image leads to broken image... need to fiddle with status code */}
      <img
        src={props.image}
        onError={(e) => {
          e.target.src = "https://placehold.co/300x300/EEE/31343C";
        }}
        className="card-img-top rounded-0"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title mt-2 mb-2 fw-bold lh-normal">{props.name}</h5>
        <p className="card-text"></p>
        <Link
          to={`/products?categoryId=${props.id}`}
          className="btn btn-primary"
        >
          Go somewhere
        </Link>
      </div>
    </div>
  );
}

export default CategoryCard;
