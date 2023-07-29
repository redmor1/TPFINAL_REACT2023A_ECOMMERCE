import { useState } from "react";
import useCart from "../../../hooks/useCart";

function ProductInfo(props) {
  const cart = useCart();

  const [quantity, setQuantity] = useState(1);

  function handleBuy() {
    props.product.quantity = quantity;
    cart.addProduct(props.product);
  }

  return (
    <>
      <div className="col-5 me-3">
        <img src={props.product.images} className="img-fluid" alt="..." />
      </div>
      <div className="col-5">
        <h1 className="product-title fw-semibold my-0">
          {props.product.title}
        </h1>
        <h3 className="product-price mb-3">${props.product.price}</h3>
        <p className="product-description col-8 mb-4">
          {props.product.description}
        </p>
        <div className="mb-3 d-flex">
          <button
            type="button"
            className="col-8 btn border-1 border-black rounded-0 fw-semibold btn-3 me-3 bg-dark text-white fw-semibold product-buy-button"
            onClick={handleBuy}
          >
            Add to Cart - ${props.product.price * quantity}
          </button>
          <div className="border border-1 border-black d-flex align-items-center justify-content-space-between">
            <button
              className="btn ps-2"
              onClick={() => {
                setQuantity(quantity - 1);
              }}
              disabled={quantity === 0}
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
            <p className="lh-1 mb-0 product-quantity mx-1">{quantity}</p>
            <button
              className="btn pe-2"
              onClick={() => {
                setQuantity(quantity + 1);
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
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
