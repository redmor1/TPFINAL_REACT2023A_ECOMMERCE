import { useState, useEffect } from "react";
import Category from "./components/Category";
import { API_URL } from "../../constants/API_URL";
import Loader from "../../components/Loader/Loader";

function Categories() {
  const [categories, setCategories] = useState();

  async function getCategories(API_URL) {
    try {
      const res = await fetch(`${API_URL}/categories`);
      const json = await res.json();
      setCategories(json);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getCategories(API_URL);
  }, []);

  return (
    <div className="container-fluid justify-content-evenly row my-5 mx-auto">
      <div className="row">
        {categories ? (
          categories.map((category) => {
            return (
              // TODO CategoryList
              <Category
                key={category.id}
                id={category.id}
                name={category.name}
                image={category.image}
              />
            );
          })
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default Categories;
