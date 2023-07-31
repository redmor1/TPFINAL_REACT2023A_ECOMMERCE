import { useState, createContext } from "react";

export let CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const totalPrice = calculateTotalPrice(cart);

  console.log(totalPrice);

  function calculateTotalPrice(cart) {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return total;
  }

  function addProduct(product) {
    const productExists = cart.find((item) => item.id === product.id);

    if (productExists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product }]);
    }
  }

  function removeProduct(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  const value = { addProduct, removeProduct, clearCart, cart, totalPrice };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
