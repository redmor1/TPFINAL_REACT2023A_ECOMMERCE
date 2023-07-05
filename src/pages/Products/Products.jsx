import { useEffect, useState } from "react";
import Product from "./components/Product";
import { API_URL } from "../../constants/API_URL";
import Filter from "./components/Filter";
import Loader from "../../components/Loader/Loader";

function Products() {
  const [products, setProducts] = useState();

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
  }, []);

  return (
    <div className="container-fluid my-5 mx-auto">
      <div className="row">
        <Filter />
        <div className="col-9 flex-wrap d-flex justify-content-evenly">
          {products ? (
            products.map((product) => {
              return (
                <Product
                  key={product.id}
                  id={product.id}
                  image={product.images}
                  title={product.title}
                  price={product.price}
                />
              );
            })
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
