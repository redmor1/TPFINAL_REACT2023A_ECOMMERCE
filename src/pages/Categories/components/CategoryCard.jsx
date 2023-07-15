import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useDeleteCategory from "../../../hooks/useDeleteCategory";

function CategoryCard(props) {
  const auth = useAuth();

  const deleteCategoryMutation = useDeleteCategory();

  function handleClick() {
    deleteCategoryMutation.mutate(props.id);
  }

  if (
    !auth.isLoading &&
    auth.userInfo &&
    auth.userInfo.isUserValid &&
    auth.userInfo.data.role == "admin"
  ) {
    return (
      <div className="card col-3-5 mx-1 mb-4 border-0">
        <img
          src={props.image}
          onError={(e) => {
            e.target.src = "https://placehold.co/300x300/EEE/31343C";
          }}
          className="card-img-top rounded-0"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title mt-2 mb-2 fw-bold lh-normal">
            {props.name}
          </h5>
          <p className="card-text"></p>
          <Link
            to={`/products?categoryId=${props.id}`}
            className="btn btn-primary"
          >
            Go somewhere
          </Link>
          <button onClick={handleClick} className="btn btn-danger">
            Eliminar categoria
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card col-3-5 mx-1 mb-4 border-0">
        <img
          src={props.image}
          onError={(e) => {
            e.target.src = "https://placehold.co/300x300/EEE/31343C";
          }}
          className="card-img-top rounded-0"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title mt-2 mb-2 fw-bold lh-normal">
            {props.name}
          </h5>
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
}

export default CategoryCard;
