import { useEffect, useState } from "react";
import { API_URL } from "../../constants/API_URL";
import Filter from "./components/Filter";
import Loader from "../../components/Loader/Loader";
import ProductList from "./components/ProductList";

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
          {products ? <ProductList products={products} /> : <Loader />}
        </div>
      </div>
    </div>
  );
}

export default Products;
