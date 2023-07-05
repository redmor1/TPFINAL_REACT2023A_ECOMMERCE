import { useState, useEffect } from "react";
import Category from "./components/Category";
import { API_URL } from "../../constants/API_URL";

function Categories() {
  const [categories, setCategories] = useState([]);

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
  }, [categories]);

  return (
    <div className="container-fluid justify-content-evenly row my-5 mx-auto">
      <div className="row">
        {categories.map((category) => {
          return (
            <Category
              key={category.id}
              id={category.id}
              name={category.name}
              image={category.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
