import { useEffect, useState } from "react";
import Product from "./components/Product";

function Products() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const res = await fetch(
        // TODO //
        "https://api.escuelajs.co/api/v1/products/?offset=0&limit=10"
      );
      const json = await res.json();
      setProducts(json);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getProducts();
  }, [products]);

  return (
    <div className="container-fluid row my-5 mx-auto">
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            image={product.images}
            title={product.title}
            price={product.price}
          />
        );
      })}
    </div>
  );
}

export default Products;
