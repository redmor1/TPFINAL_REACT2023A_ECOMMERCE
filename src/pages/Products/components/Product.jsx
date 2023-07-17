import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useDeleteProduct from "../../../hooks/useDeleteProduct";
import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "../../../components/Modal";

function Product(props) {
  const auth = useAuth();
  const [showModal, setShowModal] = useState(false);

  const deleteProductMutation = useDeleteProduct();

  function handleClick() {
    setShowModal(!showModal);
  }

  if (
    !auth.isLoading &&
    auth.userInfo &&
    auth.userInfo.isUserValid &&
    auth.userInfo.data.role == "admin"
  ) {
    return (
      <div className="card col-3-5 mx-1 mb-4 border-0">
        <Link to={`/products/${props.id}`} className="btn text-start p-0">
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
              {props.title}
            </h5>
            <p className="card-text">${props.price}</p>
          </div>
        </Link>
        <button onClick={handleClick} className="btn btn-danger">
          Delete product
        </button>
        {showModal &&
          createPortal(
            <Modal
              setShowModal={setShowModal}
              deleteItem={deleteProductMutation}
              id={props.id}
            />,
            document.body
          )}
      </div>
    );
  } else {
    return (
      <div className="card col-3-5 mx-1 mb-4 border-0">
        <Link to={`/products/${props.id}`} className="btn text-start p-0">
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
              {props.title}
            </h5>
            <p className="card-text">${props.price}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default Product;
