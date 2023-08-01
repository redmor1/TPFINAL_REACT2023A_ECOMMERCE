import useCart from "../../hooks/useCart";
import CartProduct from "./CartProduct";

function CartDetails() {
  const { cart, totalPrice, removeProduct, addQuantity, removeQuantity } =
    useCart();

  return (
    <>
      <div className="container-fluid my-5 mx-auto">
        <div className="row justify-content-center">
          <div className="col-10 d-flex justify-content-evenly flex-column">
            <h1>Your cart</h1>
            {cart.map((product) => {
              return (
                <CartProduct
                  product={product}
                  key={product.id}
                  addQuantity={addQuantity}
                  removeQuantity={removeQuantity}
                  removeProduct={removeProduct}
                />
              );
            })}
            <h5 className="my-3">Checkout price: ${totalPrice}</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartDetails;
