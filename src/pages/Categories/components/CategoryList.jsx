import CategoryCard from "./CategoryCard";

function CategoryList(props) {
  return props.categories.map((category) => {
    return (
      <CategoryCard
        key={category.id}
        id={category.id}
        name={category.name}
        image={category.image}
      />
    );
  });
}

export default CategoryList;
