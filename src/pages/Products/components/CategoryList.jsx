import { useEffect, useState } from "react";
import { API_URL } from "../../../constants/API_URL";
import CategoryItem from "./CategoryItem";

function CategoryList() {
  const [categories, setCategories] = useState();

  // TODO: Abstract this function and state into a custom one so i can use it in two places
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
  });

  return (
    <>
      <h2>Categories</h2>
      <ul className="list-group">
        {categories ? (
          categories.map((category) => {
            return (
              <CategoryItem
                key={category.id}
                id={category.id}
                name={category.name}
              />
            );
          })
        ) : (
          <h1>Loading</h1>
        )}
      </ul>
    </>
  );
}

export default CategoryList;
