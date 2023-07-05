import { useEffect, useState } from "react";
import Product from "./components/Product";
import { API_URL } from "../../constants/API_URL";

function Products() {
  const [products, setProducts] = useState([]);

  async function getProducts(API_URL) {
    try {
      const res = await fetch(`${API_URL}/products/?offset=0&limit=10`);
      const json = await res.json();
      setProducts(json);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getProducts(API_URL);
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
