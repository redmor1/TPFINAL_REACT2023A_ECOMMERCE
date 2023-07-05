import { useState, useEffect } from "react";
import Category from "./components/Category";

function Categories() {
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/categories/");
      const json = await res.json();
      setCategories(json);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getCategories();
  }, [categories]);

  return (
    <div className="container-fluid justify-content-evenly row my-5 mx-auto">
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
  );
}

export default Categories;
