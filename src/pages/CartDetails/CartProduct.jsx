function CartProduct(props) {
  return (
    <div className="col-8 d-flex flex-row pb-4 border-bottom">
      <img
        src={props.product.images}
        onError={(e) => {
          e.target.src = "https://placehold.co/130x130/EEE/31343C";
        }}
        className="card-img me-4"
        style={{ width: "130px" }}
        alt="..."
      ></img>
      <div className="card-body">
        <h5 className="">{props.product.title}</h5>
        <h6>${props.product.price}</h6>
        <p className="card-text">Quantity: {props.product.quantity}</p>
        <div className="border border-1 border-black d-flex align-items-center justify-content-space-between">
          <button
            className="btn ps-2"
            onClick={() => {
              props.removeQuantity(props.product.id);
            }}
            disabled={props.product.quantity === 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g opacity="0.5">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.0001 10.8334H5.00008C4.54175 10.8334 4.16675 10.4584 4.16675 10C4.16675 9.54169 4.54175 9.16669 5.00008 9.16669H15.0001C15.4584 9.16669 15.8334 9.54169 15.8334 10C15.8334 10.4584 15.4584 10.8334 15.0001 10.8334Z"
                  fill="#0D0D0D"
                />
              </g>
            </svg>
          </button>
          <p className="lh-1 mb-0 product-quantity mx-1">
            {props.product.quantity}
          </p>
          <button
            className="btn pe-2"
            onClick={() => {
              props.addQuantity(props.product.id);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g opacity="0.5">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.0001 10.8334H10.8334V15C10.8334 15.4584 10.4584 15.8334 10.0001 15.8334C9.54175 15.8334 9.16675 15.4584 9.16675 15V10.8334H5.00008C4.54175 10.8334 4.16675 10.4584 4.16675 10C4.16675 9.54169 4.54175 9.16669 5.00008 9.16669H9.16675V5.00002C9.16675 4.54169 9.54175 4.16669 10.0001 4.16669C10.4584 4.16669 10.8334 4.54169 10.8334 5.00002V9.16669H15.0001C15.4584 9.16669 15.8334 9.54169 15.8334 10C15.8334 10.4584 15.4584 10.8334 15.0001 10.8334Z"
                  fill="#0D0D0D"
                />
              </g>
            </svg>
          </button>
        </div>
        <h5>Total price: ${props.product.price * props.product.quantity}</h5>
        <button
          className="btn btn-danger"
          onClick={() => {
            props.removeProduct(props.product.id);
          }}
        >
          Remove product
        </button>
      </div>
    </div>
  );
}

export default CartProduct;
